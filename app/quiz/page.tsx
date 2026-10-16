"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Check, AlertCircle, RotateCcw } from "lucide-react";
import CloneNavbar from "@/components/CloneNavbar";
import { QUESTIONS, PROVINCES, SERVICE_INFO, getVisibleQuestions } from "@/lib/assessment/data";
import { computeResult, buildRequirements } from "@/lib/assessment/engine";
import type { Answers, QuestionId, AssessmentResult } from "@/lib/assessment/types";
import { useT } from "@/context/LanguageContext";

type Phase = "quiz" | "analyzing" | "results" | "success";

interface LeadForm {
  full_name: string;
  phone: string;
  line_id: string;
  convenient_time: string;
  province: string;
  privacy: boolean;
  contact_consent: boolean;
  marketing: boolean;
}

const EMPTY_LEAD: LeadForm = {
  full_name: "", phone: "", line_id: "", convenient_time: "", province: "",
  privacy: false, contact_consent: false, marketing: false,
};

// ─────────────────────────────────────────────────────────────────────────────

export default function QuizPage() {
  const t = useT();
  const qt = t.quizPage;
  const [phase, setPhase]         = useState<Phase>("quiz");
  const [answers, setAnswers]     = useState<Partial<Answers>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [result, setResult]       = useState<AssessmentResult | null>(null);
  const [lead, setLead]           = useState<LeadForm>(EMPTY_LEAD);
  const [leadErrors, setLeadErrors] = useState<Partial<Record<keyof LeadForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Recompute visible questions whenever household changes
  const visibleIds = useMemo(
    () => getVisibleQuestions({ household: answers.household }),
    [answers.household],
  );

  const totalVisible = visibleIds.length;
  const currentId    = visibleIds[currentIdx] as QuestionId;
  const currentQ     = QUESTIONS[currentId];

  // Clamp currentIdx if visible list shrank (e.g. user cleared household)
  useEffect(() => {
    if (currentIdx >= visibleIds.length) setCurrentIdx(Math.max(0, visibleIds.length - 1));
  }, [visibleIds.length, currentIdx]);

  // ── Answer helpers ────────────────────────────────────────────────────────

  function toggleMulti(qId: QuestionId, value: string) {
    const q    = QUESTIONS[qId];
    const curr = (answers[qId] as string[] | undefined) ?? [];
    const isExclusive  = q.exclusiveValues?.includes(value) ?? false;
    const hasExclusive = curr.some(v => q.exclusiveValues?.includes(v) ?? false);

    let next: string[];
    if (isExclusive) {
      next = curr.includes(value) ? [] : [value];
    } else if (hasExclusive) {
      next = [value];
    } else {
      next = curr.includes(value) ? curr.filter(v => v !== value) : [...curr, value];
    }

    if (qId === "household") {
      const hasChild = next.some(v => ["baby","toddler","preschool","school"].includes(v));
      const hasElder = next.some(v => ["independent","assisted","dependent"].includes(v));
      setAnswers(prev => {
        const updated: Partial<Answers> = { ...prev, household: next };
        if (!hasChild) delete updated.childcare;
        if (!hasElder) delete updated.eldercare;
        return updated;
      });
    } else {
      setAnswers(prev => ({ ...prev, [qId]: next }));
    }
  }

  function selectSingle(qId: QuestionId, value: string) {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  }

  function setNotes(value: string) {
    setAnswers(prev => ({ ...prev, notes: value }));
  }

  // ── Navigation ────────────────────────────────────────────────────────────

  const canProceed = useMemo(() => {
    if (!currentQ.required) return true;
    const val = answers[currentId];
    if (currentQ.type === "multi") return ((val as string[] | undefined) ?? []).length > 0;
    return val !== undefined && val !== "";
  }, [answers, currentId, currentQ]);

  function handleNext() {
    if (!canProceed) return;
    if (currentIdx < totalVisible - 1) {
      setCurrentIdx(i => i + 1);
    } else {
      // Done — analyze
      const computed = computeResult(answers as Answers);
      setResult(computed);
      setPhase("analyzing");
      setTimeout(() => setPhase("results"), 2600);
    }
  }

  function handleBack() {
    if (currentIdx > 0) setCurrentIdx(i => i - 1);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && canProceed) handleNext();
  }

  // ── Lead form submission ──────────────────────────────────────────────────

  function validateLead(): boolean {
    const errs: Partial<Record<keyof LeadForm, string>> = {};
    if (!lead.full_name.trim())   errs.full_name        = qt.errName;
    if (!/^0[0-9]{8,9}$/.test(lead.phone.replace(/[-\s]/g, "")))
      errs.phone = qt.errPhone;
    if (!lead.province)           errs.province         = qt.errProvince;
    if (!lead.privacy)            errs.privacy          = qt.errPrivacy;
    if (!lead.contact_consent)    errs.contact_consent  = qt.errConsent;
    setLeadErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateLead()) return;
    setSubmitting(true);
    setSubmitError("");

    const serviceName = result ? SERVICE_INFO[result.service].name : "";
    const requirements = buildRequirements(answers as Answers, serviceName);

    try {
      const res = await fetch("/api/quiz-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:            lead.full_name.trim(),
          phone:           lead.phone.replace(/[-\s]/g, ""),
          line_id:         lead.line_id.trim() || undefined,
          convenient_time: lead.convenient_time || undefined,
          province:        lead.province,
          requirements,
          company_code:    "dd",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setPhase("success");
      } else {
        setSubmitError(data.message || qt.errGeneric);
      }
    } catch {
      setSubmitError(qt.errNetwork);
    } finally {
      setSubmitting(false);
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <>
      <CloneNavbar />
      <main
        className="min-h-screen py-10 lg:py-16 px-4"
        style={{ background: "linear-gradient(160deg, #FBF8F2 0%, #F5EFE3 50%, #FBF8F2 100%)" }}
      >
        <div className="pointer-events-none fixed inset-0 z-0"
          style={{ background: "radial-gradient(ellipse 700px 500px at 50% 30%, rgba(201,169,110,0.12) 0%, transparent 70%)" }} />

        <div className={`relative z-10 mx-auto transition-all duration-300 ${phase === "results" ? "max-w-5xl" : "max-w-[640px]"}`}>

          {/* ── QUIZ PHASE ─────────────────────────────────────────────────── */}
          {phase === "quiz" && (
            <div
              className="bg-white rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 8px 48px rgba(100,60,0,0.10)" }}
              onKeyDown={handleKeyDown}
            >
              {/* Progress header */}
              <div className="px-6 pt-6 pb-4"
                style={{ borderBottom: "1px solid rgba(201,169,110,0.14)" }}>
                <div className="flex items-center justify-between mb-3">
                  {currentIdx > 0 ? (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-1.5 text-[13px] font-semibold transition-opacity hover:opacity-60"
                      style={{ color: "#9E7D48", background: "none", border: "none", cursor: "pointer" }}
                    >
                      <ArrowLeft size={14} />
                      {qt.back}
                    </button>
                  ) : <div />}
                  <span className="text-[13px] font-bold" style={{ color: "#B0A090" }}>
                    {qt.questionOf} {currentIdx + 1} {qt.questionFrom} {totalVisible}
                  </span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(201,169,110,0.18)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${((currentIdx) / totalVisible) * 100}%`,
                      background: "linear-gradient(90deg, #C9A96E, #9E7D48)",
                    }}
                  />
                </div>
              </div>

              {/* Question body */}
              <div className="px-6 py-6">
                <h2
                  className="font-black text-ink leading-snug mb-5"
                  style={{ fontSize: "clamp(18px, 3vw, 22px)" }}
                >
                  {currentQ.question}
                </h2>

                {/* Multi-select */}
                {currentQ.type === "multi" && currentQ.options && (
                  <div className="space-y-2.5">
                    {currentQ.options.map(opt => {
                      const sel = ((answers[currentId] as string[] | undefined) ?? []).includes(opt.value);
                      return (
                        <button
                          key={opt.value}
                          onClick={() => toggleMulti(currentId, opt.value)}
                          className="w-full text-left rounded-xl px-4 py-3.5 transition-all duration-150"
                          style={{
                            border: sel ? "2px solid #C9A96E" : "2px solid rgba(201,169,110,0.22)",
                            background: sel ? "rgba(201,169,110,0.10)" : "#FEFDF9",
                            cursor: "pointer",
                          }}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className="w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all"
                              style={{
                                border: sel ? "none" : "2px solid rgba(201,169,110,0.40)",
                                background: sel ? "linear-gradient(135deg,#C9A96E,#9E7D48)" : "transparent",
                              }}
                            >
                              {sel && <Check size={12} color="#fff" strokeWidth={3} />}
                            </span>
                            <span className="text-[15px] font-semibold" style={{ color: sel ? "#7A5C28" : "#1A1410" }}>
                              {opt.label}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Single-select */}
                {currentQ.type === "single" && currentQ.options && (
                  <div className="space-y-2.5">
                    {currentQ.options.map(opt => {
                      const sel = answers[currentId] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => selectSingle(currentId, opt.value)}
                          className="w-full text-left rounded-xl px-4 py-3.5 transition-all duration-150"
                          style={{
                            border: sel ? "2px solid #C9A96E" : "2px solid rgba(201,169,110,0.22)",
                            background: sel ? "rgba(201,169,110,0.10)" : "#FEFDF9",
                            cursor: "pointer",
                          }}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all"
                              style={{
                                border: sel ? "none" : "2px solid rgba(201,169,110,0.40)",
                                background: sel ? "linear-gradient(135deg,#C9A96E,#9E7D48)" : "transparent",
                              }}
                            >
                              {sel && <span className="w-2 h-2 rounded-full bg-white" />}
                            </span>
                            <span className="text-[15px] font-semibold" style={{ color: sel ? "#7A5C28" : "#1A1410" }}>
                              {opt.label}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Textarea (Q13) */}
                {currentQ.type === "textarea" && (
                  <div>
                    <textarea
                      value={(answers.notes as string | undefined) ?? ""}
                      onChange={e => setNotes(e.target.value)}
                      maxLength={currentQ.maxLength}
                      placeholder={currentQ.placeholder}
                      rows={4}
                      className="w-full rounded-xl px-4 py-3 text-[14px] leading-relaxed outline-none resize-none transition-all"
                      style={{ border: "1.5px solid rgba(201,169,110,0.30)", background: "#FEFDF9", color: "#1A1410" }}
                      onFocus={e => { e.currentTarget.style.borderColor = "#C9A96E"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.30)"; }}
                    />
                    <p className="text-right text-[12px] mt-1" style={{ color: "#B0A090" }}>
                      {((answers.notes as string | undefined) ?? "").length} / {currentQ.maxLength}
                    </p>
                    <p className="text-[12px] mt-1" style={{ color: "#B0A090" }}>
                      {qt.noSensitiveData}
                    </p>
                  </div>
                )}

                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="w-full mt-6 rounded-xl py-4 font-black text-[15px] flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: canProceed ? "linear-gradient(135deg,#C9A96E,#9E7D48)" : "rgba(201,169,110,0.28)",
                    color: canProceed ? "#fff" : "rgba(255,255,255,0.6)",
                    boxShadow: canProceed ? "0 6px 28px rgba(201,169,110,0.38)" : "none",
                    cursor: canProceed ? "pointer" : "not-allowed",
                  }}
                >
                  {currentIdx < totalVisible - 1 ? (
                    <>{qt.next} <ArrowRight size={16} /></>
                  ) : (
                    <>{qt.summarize} <ArrowRight size={16} /></>
                  )}
                </button>

                {!currentQ.required && currentIdx === totalVisible - 1 && (
                  <p className="text-center text-[12px] mt-2" style={{ color: "#B0A090" }}>{qt.optional}</p>
                )}
              </div>
            </div>
          )}

          {/* ── ANALYZING ──────────────────────────────────────────────────── */}
          {phase === "analyzing" && (
            <div
              className="bg-white rounded-3xl px-7 py-14 text-center"
              style={{ boxShadow: "0 8px 48px rgba(100,60,0,0.10)" }}
            >
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ background: "rgba(201,169,110,0.08)", border: "2px solid rgba(201,169,110,0.28)" }}
              >
                <Loader2 size={38} className="animate-spin" style={{ color: "#C9A96E" }} />
              </div>
              <h2 className="font-black text-ink text-[22px] mb-2">{qt.analyzingTitle}</h2>
              <p style={{ color: "#9E7D48", fontSize: 14 }}>{qt.analyzingDesc} {totalVisible} {qt.analyzingUnit}</p>
              <div className="flex justify-center gap-4 mt-8">
                {qt.analyzingLabels.map((label: string, i: number) => (
                  <div key={label} className="text-center">
                    <div className="w-2 h-2 rounded-full mx-auto mb-1.5 animate-bounce"
                      style={{ background: "#C9A96E", animationDelay: `${i * 0.18}s` }} />
                    <span className="text-[10px]" style={{ color: "#B0A090" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── RESULTS + LEAD FORM (side by side) ─────────────────────── */}
          {phase === "results" && result && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

              {/* LEFT — Analysis result */}
              <div className="space-y-4">
                <div
                  className="bg-white rounded-3xl overflow-hidden"
                  style={{ boxShadow: "0 8px 48px rgba(100,60,0,0.10)" }}
                >
                  <div className="px-6 py-5" style={{ background: "linear-gradient(135deg,#1A1410 0%,#2D1B0E 100%)" }}>
                    <p className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1"
                      style={{ color: "rgba(201,169,110,0.70)" }}>{qt.resultLabel}</p>
                    <h2 className="font-black text-white text-[22px] lg:text-[24px]">
                      {SERVICE_INFO[result.service].name}
                    </h2>
                    <p className="text-[13px] mt-1.5 leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
                      {SERVICE_INFO[result.service].desc}
                    </p>
                  </div>

                  <div className="px-6 py-5">
                    <div className="mb-4">
                      <p className="text-[11px] font-bold uppercase tracking-wide mb-2.5" style={{ color: "#9E7D48" }}>{qt.reasonsLabel}</p>
                      <ul className="space-y-2">
                        {result.reasons.map(r => (
                          <li key={r} className="flex items-start gap-2.5 text-[14px]" style={{ color: "#3A2A1A" }}>
                            <Check size={14} className="shrink-0 mt-0.5" style={{ color: "#C9A96E" }} strokeWidth={2.5} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4 p-3.5 rounded-xl" style={{ background: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.18)" }}>
                      <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: "#9E7D48" }}>{qt.dutiesLabel}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {SERVICE_INFO[result.service].duties.map(d => (
                          <span key={d} className="text-[12px] font-semibold px-2.5 py-1 rounded-full"
                            style={{ background: "rgba(201,169,110,0.14)", color: "#7A5C28" }}>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {result.precautions.length > 0 && (
                      <div className="mb-4 p-3.5 rounded-xl" style={{ background: "rgba(212,87,110,0.06)", border: "1px solid rgba(212,87,110,0.18)" }}>
                        <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: "#B03255" }}>{qt.precautionsLabel}</p>
                        <ul className="space-y-1.5">
                          {result.precautions.map(p => (
                            <li key={p} className="flex items-start gap-2 text-[13px]" style={{ color: "#5A2A3A" }}>
                              <AlertCircle size={12} className="shrink-0 mt-0.5" style={{ color: "#D4576E" }} />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {result.specialist_review_required && (
                      <div className="mb-4 p-3.5 rounded-xl flex gap-3" style={{ background: "rgba(201,169,110,0.10)", border: "1px solid rgba(201,169,110,0.30)" }}>
                        <AlertCircle size={15} className="shrink-0 mt-0.5" style={{ color: "#C9A96E" }} />
                        <p className="text-[13px] font-semibold" style={{ color: "#7A5C28" }}>
                          {qt.specialistNote}
                        </p>
                      </div>
                    )}

                    <p className="text-[11px] leading-relaxed" style={{ color: "#B0A090" }}>
                      {qt.disclaimerNote}
                    </p>
                  </div>
                </div>

                {/* Secondary actions */}
                <a
                  href="https://line.me/ti/p/~@dede1721"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full rounded-2xl py-3.5 font-bold text-white text-[14px] flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg,#3EB600,#066D00)", boxShadow: "0 4px 24px rgba(6,109,0,0.28)", textDecoration: "none" }}
                >
                  {qt.consultLine}
                  <ArrowRight size={15} />
                </a>

                <button
                  onClick={() => { setAnswers({}); setCurrentIdx(0); setPhase("quiz"); }}
                  className="w-full rounded-2xl py-3 font-bold text-[13px] flex items-center justify-center gap-1.5 transition-all hover:opacity-70"
                  style={{ background: "rgba(201,169,110,0.10)", color: "#9E7D48", border: "1px solid rgba(201,169,110,0.28)" }}
                >
                  <RotateCcw size={13} />
                  {qt.retake}
                </button>
              </div>

              {/* RIGHT — Lead form (sticky on desktop) */}
              <div className="lg:sticky lg:top-24">
                <div
                  className="bg-white rounded-3xl overflow-hidden"
                  style={{ boxShadow: "0 8px 48px rgba(100,60,0,0.10)" }}
                >
                  <div className="px-6 py-5" style={{ background: "linear-gradient(135deg,#1A1410,#2D1B0E)" }}>
                    <p className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(201,169,110,0.70)" }}>
                      {qt.formTitle}
                    </p>
                    <h3 className="font-black text-white text-[18px]">{qt.formSubtitle}</h3>
                    <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {qt.formFreeNote}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="px-6 py-5 space-y-3.5" noValidate>
                    <div>
                      <label className="block text-[12px] font-bold text-ink mb-1.5">
                        {qt.fieldName} <span style={{ color: "#D4576E" }}>*</span>
                      </label>
                      <input
                        value={lead.full_name}
                        onChange={e => setLead(l => ({ ...l, full_name: e.target.value }))}
                        placeholder={qt.fieldNamePlaceholder}
                        className="w-full rounded-xl px-4 py-2.5 text-[14px] outline-none transition-all"
                        style={{ border: `1.5px solid ${leadErrors.full_name ? "#D4576E" : "rgba(201,169,110,0.30)"}`, background: "#FEFDF9" }}
                        onFocus={e => { e.currentTarget.style.borderColor = "#C9A96E"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = leadErrors.full_name ? "#D4576E" : "rgba(201,169,110,0.30)"; }}
                      />
                      {leadErrors.full_name && <p className="text-[11px] mt-1" style={{ color: "#D4576E" }}>{leadErrors.full_name}</p>}
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-ink mb-1.5">
                        {qt.fieldPhone} <span style={{ color: "#D4576E" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        value={lead.phone}
                        onChange={e => setLead(l => ({ ...l, phone: e.target.value }))}
                        placeholder="0812345678"
                        className="w-full rounded-xl px-4 py-2.5 text-[14px] outline-none transition-all"
                        style={{ border: `1.5px solid ${leadErrors.phone ? "#D4576E" : "rgba(201,169,110,0.30)"}`, background: "#FEFDF9" }}
                        onFocus={e => { e.currentTarget.style.borderColor = "#C9A96E"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = leadErrors.phone ? "#D4576E" : "rgba(201,169,110,0.30)"; }}
                      />
                      {leadErrors.phone && <p className="text-[11px] mt-1" style={{ color: "#D4576E" }}>{leadErrors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-ink mb-1.5">
                        {qt.fieldProvince} <span style={{ color: "#D4576E" }}>*</span>
                      </label>
                      <select
                        value={lead.province}
                        onChange={e => setLead(l => ({ ...l, province: e.target.value }))}
                        className="w-full rounded-xl px-4 py-2.5 text-[14px] outline-none"
                        style={{
                          border: `1.5px solid ${leadErrors.province ? "#D4576E" : "rgba(201,169,110,0.30)"}`,
                          background: "#FEFDF9",
                          color: lead.province ? "#1A1410" : "#B0A090",
                        }}
                      >
                        <option value="">{qt.fieldProvinceSelect}</option>
                        {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                      {leadErrors.province && <p className="text-[11px] mt-1" style={{ color: "#D4576E" }}>{leadErrors.province}</p>}
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-ink mb-1.5">LINE ID <span style={{ color: "#B0A090" }}>({qt.fieldLineOptional})</span></label>
                      <input
                        value={lead.line_id}
                        onChange={e => setLead(l => ({ ...l, line_id: e.target.value }))}
                        placeholder="@yourlineid"
                        className="w-full rounded-xl px-4 py-2.5 text-[14px] outline-none transition-all"
                        style={{ border: "1.5px solid rgba(201,169,110,0.30)", background: "#FEFDF9" }}
                        onFocus={e => { e.currentTarget.style.borderColor = "#C9A96E"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.30)"; }}
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-ink mb-1.5">{qt.fieldTime} <span style={{ color: "#B0A090" }}>({qt.fieldLineOptional})</span></label>
                      <select
                        value={lead.convenient_time}
                        onChange={e => setLead(l => ({ ...l, convenient_time: e.target.value }))}
                        className="w-full rounded-xl px-4 py-2.5 text-[14px] outline-none"
                        style={{ border: "1.5px solid rgba(201,169,110,0.30)", background: "#FEFDF9", color: lead.convenient_time ? "#1A1410" : "#B0A090" }}
                      >
                        <option value="">{qt.fieldTimeSelect}</option>
                        <option value="morning">{qt.timeMorning}</option>
                        <option value="afternoon">{qt.timeAfternoon}</option>
                        <option value="evening">{qt.timeEvening}</option>
                        <option value="anytime">{qt.timeAnytime}</option>
                      </select>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <span
                          onClick={() => setLead(l => ({ ...l, privacy: !l.privacy }))}
                          className="w-4.5 h-4.5 rounded shrink-0 mt-0.5 flex items-center justify-center transition-all"
                          style={{
                            width: 18, height: 18,
                            border: leadErrors.privacy ? "2px solid #D4576E" : lead.privacy ? "none" : "2px solid rgba(201,169,110,0.50)",
                            background: lead.privacy ? "linear-gradient(135deg,#C9A96E,#9E7D48)" : "transparent",
                            cursor: "pointer",
                          }}
                        >
                          {lead.privacy && <Check size={11} color="#fff" strokeWidth={3} />}
                        </span>
                        <span className="text-[12px] leading-relaxed" style={{ color: "#5A4A3A" }}>
                          {qt.consentPrivacy} <Link href="/privacy" className="underline" style={{ color: "#9E7D48" }}>{qt.consentPrivacyLink}</Link>{" "}
                          <span style={{ color: "#D4576E" }}>*</span>
                        </span>
                      </label>
                      {leadErrors.privacy && <p className="text-[11px] pl-6" style={{ color: "#D4576E" }}>{leadErrors.privacy}</p>}

                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <span
                          onClick={() => setLead(l => ({ ...l, contact_consent: !l.contact_consent }))}
                          className="rounded shrink-0 mt-0.5 flex items-center justify-center transition-all"
                          style={{
                            width: 18, height: 18,
                            border: leadErrors.contact_consent ? "2px solid #D4576E" : lead.contact_consent ? "none" : "2px solid rgba(201,169,110,0.50)",
                            background: lead.contact_consent ? "linear-gradient(135deg,#C9A96E,#9E7D48)" : "transparent",
                            cursor: "pointer",
                          }}
                        >
                          {lead.contact_consent && <Check size={11} color="#fff" strokeWidth={3} />}
                        </span>
                        <span className="text-[12px] leading-relaxed" style={{ color: "#5A4A3A" }}>
                          {qt.consentContact} <span style={{ color: "#D4576E" }}>*</span>
                        </span>
                      </label>
                      {leadErrors.contact_consent && <p className="text-[11px] pl-6" style={{ color: "#D4576E" }}>{leadErrors.contact_consent}</p>}

                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <span
                          onClick={() => setLead(l => ({ ...l, marketing: !l.marketing }))}
                          className="rounded shrink-0 mt-0.5 flex items-center justify-center transition-all"
                          style={{
                            width: 18, height: 18,
                            border: lead.marketing ? "none" : "2px solid rgba(201,169,110,0.50)",
                            background: lead.marketing ? "linear-gradient(135deg,#C9A96E,#9E7D48)" : "transparent",
                            cursor: "pointer",
                          }}
                        >
                          {lead.marketing && <Check size={11} color="#fff" strokeWidth={3} />}
                        </span>
                        <span className="text-[12px]" style={{ color: "#5A4A3A" }}>{qt.consentMarketing}</span>
                      </label>
                    </div>

                    {submitError && (
                      <div className="flex items-start gap-2 px-3.5 py-2.5 rounded-xl" style={{ background: "rgba(212,87,110,0.08)", border: "1px solid rgba(212,87,110,0.22)" }}>
                        <AlertCircle size={13} className="shrink-0 mt-0.5" style={{ color: "#D4576E" }} />
                        <p className="text-[12px] font-semibold" style={{ color: "#D4576E" }}>{submitError}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-xl py-3.5 font-black text-white text-[15px] flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg,#C9A96E,#9E7D48)",
                        boxShadow: "0 6px 28px rgba(201,169,110,0.38)",
                        cursor: submitting ? "wait" : "pointer",
                      }}
                    >
                      {submitting ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle2 size={16} />}
                      {submitting ? qt.submitting : qt.submit}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          )}

          {/* ── SUCCESS ────────────────────────────────────────────────────── */}
          {phase === "success" && (
            <div
              className="bg-white rounded-3xl px-7 py-14 text-center"
              style={{ boxShadow: "0 8px 48px rgba(100,60,0,0.10)" }}
            >
              <div
                className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{ background: "rgba(107,158,120,0.10)", border: "2px solid rgba(107,158,120,0.35)" }}
              >
                <CheckCircle2 size={40} style={{ color: "#6B9E78" }} />
              </div>
              <h2 className="font-black text-ink text-[24px] mb-2">{qt.successTitle}</h2>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "#7A6555" }}>
                {qt.successDesc.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="rounded-xl px-8 py-3.5 font-black text-white text-[15px] flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg,#C9A96E,#9E7D48)", boxShadow: "0 6px 28px rgba(201,169,110,0.38)", textDecoration: "none" }}
                >
                  {qt.backHome}
                </Link>
                <a
                  href="https://line.me/ti/p/~@dede1721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-8 py-3.5 font-bold text-[14px] flex items-center justify-center gap-2 transition-all hover:opacity-70"
                  style={{ background: "rgba(62,182,0,0.08)", color: "#2E7800", border: "1px solid rgba(62,182,0,0.25)", textDecoration: "none" }}
                >
                  {qt.contactLine}
                </a>
              </div>
            </div>
          )}

        </div>
      </main>
    </>
  );
}
