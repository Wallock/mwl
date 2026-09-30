import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import Reveal from "@/components/Reveal";
import { IMG } from "@/lib/images";
import { CheckCircle2, Banknote, Clock, ShieldCheck } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */

const serviceMap = {
  maid: {
    keyword:    "แม่บ้าน",
    title:      "แม่บ้านทั่วไป",
    badge:      "บริการยอดนิยม",
    img:        IMG.maid,
    priceStart: "11,000 บาท/เดือน",
    priceRange: "11,000 – 13,000",
    priceUnit:  "บาท / เดือน",
    priceNote:  "ราคาขึ้นอยู่กับพื้นที่บริการและประสบการณ์ของพนักงาน",
    workTime:   "จ.–ส. 08:00–17:00",
    desc:       "จัดหาแม่บ้านคุณภาพ ทั้งคนไทยและคนลาว ผ่านการตรวจโรค ตรวจประวัติ พร้อมทำงานได้ทันที",
    features:   [
      "ทำความสะอาดบ้านทั่วไป",
      "ซักผ้า รีดผ้า พับผ้า",
      "ทำอาหาร ล้างจาน",
      "ดูแลความเป็นระเบียบในบ้าน",
      "ดูแลเด็กและผู้สูงอายุเบื้องต้น",
      "ซื้อของ จ่ายตลาด",
    ],
    guarantees: [
      { Icon: ShieldCheck,  text: "ตรวจประวัติอาชญากรรม" },
      { Icon: CheckCircle2, text: "ตรวจโรคติดต่อ 5 โรค" },
      { Icon: CheckCircle2, text: "มีใบอนุญาตถูกต้อง" },
      { Icon: CheckCircle2, text: "อบรมก่อนส่งงาน" },
    ],
  },
  nanny: {
    keyword:    "พี่เลี้ยงเด็ก",
    title:      "พี่เลี้ยงเด็ก",
    badge:      "แนะนำ",
    img:        IMG.nanny,
    priceStart: "12,000 บาท/เดือน",
    priceRange: "12,000 – 15,000",
    priceUnit:  "บาท / เดือน",
    priceNote:  "ราคาขึ้นอยู่กับพื้นที่บริการและประสบการณ์ของพี่เลี้ยง",
    workTime:   "จ.–ส. 08:00–17:00",
    desc:       "พี่เลี้ยงเด็กที่ผ่านการอบรม ตรวจโรค และตรวจประวัติ พร้อมดูแลลูกน้อยอย่างใส่ใจ",
    features:   [
      "ดูแลเด็กเล็กและทารก",
      "พาเด็กไปโรงเรียน รับ-ส่ง",
      "เล่น อ่านหนังสือ ส่งเสริมพัฒนาการ",
      "ดูแลความสะอาดของเด็ก",
      "ช่วยทำอาหารสำหรับเด็ก",
      "งานบ้านเบื้องต้น",
    ],
    guarantees: [
      { Icon: ShieldCheck,  text: "ตรวจประวัติอาชญากรรม" },
      { Icon: CheckCircle2, text: "ตรวจโรคติดต่อ 5 โรค" },
      { Icon: CheckCircle2, text: "มีใบอนุญาตถูกต้อง" },
      { Icon: CheckCircle2, text: "อบรมดูแลเด็กก่อนส่งงาน" },
    ],
  },
  elder: {
    keyword:    "ผู้ดูแลผู้สูงอายุ",
    title:      "ดูแลผู้สูงอายุ",
    badge:      "มืออาชีพ",
    img:        IMG.elder,
    priceStart: "12,000 บาท/เดือน",
    priceRange: "12,000 – 16,000",
    priceUnit:  "บาท / เดือน",
    priceNote:  "ราคาขึ้นอยู่กับความเข้มข้นของการดูแลและพื้นที่บริการ",
    workTime:   "จ.–ส. 08:00–17:00",
    desc:       "ผู้ดูแลผู้สูงอายุที่ผ่านการอบรมเฉพาะทาง ดูแลด้วยความเอาใจใส่อย่างถูกต้องและปลอดภัย",
    features:   [
      "ดูแลผู้สูงอายุและผู้ป่วยติดเตียง",
      "ให้ยาตามเวลาที่กำหนด",
      "พาไปพบแพทย์ นัดหมายต่างๆ",
      "ออกกำลังกายเบาๆ กายภาพบำบัด",
      "ดูแลความสะอาดของร่างกาย",
      "ทำอาหารเหมาะสมตามสภาพร่างกาย",
    ],
    guarantees: [
      { Icon: ShieldCheck,  text: "ตรวจประวัติอาชญากรรม" },
      { Icon: CheckCircle2, text: "ตรวจโรคติดต่อ 5 โรค" },
      { Icon: CheckCircle2, text: "มีใบอนุญาตถูกต้อง" },
      { Icon: CheckCircle2, text: "อบรมดูแลผู้สูงอายุโดยเฉพาะ" },
    ],
  },
  labor: {
    keyword:    "แรงงานทั่วไป",
    title:      "แรงงานทั่วไป",
    badge:      "รายวัน",
    img:        IMG.labor,
    priceStart: "353 บาท/วัน",
    priceRange: "353 – 500",
    priceUnit:  "บาท / วัน",
    priceNote:  "ราคาขึ้นอยู่กับประเภทงานและพื้นที่บริการ",
    workTime:   "08:00 – 17:00",
    desc:       "จัดหาแรงงานทั่วไปและกรรมกร คนไทยและคนลาว พร้อมทำงานหนักได้ทันที มีเอกสารถูกต้อง",
    features:   [
      "งานขนของ ย้ายสิ่งของ",
      "งานทำความสะอาดโรงงาน/คลังสินค้า",
      "งานก่อสร้างเบื้องต้น",
      "งานตกแต่ง ทาสี ซ่อมแซมทั่วไป",
      "งานสวน ตัดหญ้า จัดสวน",
      "งานทั่วไปตามที่ได้รับมอบหมาย",
    ],
    guarantees: [
      { Icon: ShieldCheck,  text: "ตรวจประวัติอาชญากรรม" },
      { Icon: CheckCircle2, text: "มีบัตรประชาชนหรือใบอนุญาตทำงาน" },
      { Icon: CheckCircle2, text: "มีใบอนุญาตจัดหางานถูกต้อง" },
      { Icon: CheckCircle2, text: "พร้อมทำงานได้ทันที" },
    ],
  },
} as const;

const locationMap: Record<string, string> = {
  กรุงเทพ:    "กรุงเทพมหานคร",
  ลาดพร้าว:   "แขวงลาดพร้าว กรุงเทพฯ",
  สุขุมวิท:   "ถนนสุขุมวิท กรุงเทพฯ",
  บางนา:      "เขตบางนา กรุงเทพฯ",
  ทองหล่อ:    "ย่านทองหล่อ กรุงเทพฯ",
  นนทบุรี:    "จังหวัดนนทบุรี",
  ปทุมธานี:   "จังหวัดปทุมธานี",
  สมุทรปราการ: "จังหวัดสมุทรปราการ",
  รามคำแหง:   "ถนนรามคำแหง กรุงเทพฯ",
  บางกะปิ:    "เขตบางกะปิ กรุงเทพฯ",
  มีนบุรี:    "เขตมีนบุรี กรุงเทพฯ",
  ลาดกระบัง:  "เขตลาดกระบัง กรุงเทพฯ",
};

/* ─── Helpers ───────────────────────────────────────────── */

type ServiceKey = keyof typeof serviceMap;

// Thai keyboards (TIS-620) store tone mark before above-vowel (่ + ี),
// but browsers/WTT send above-vowel before tone mark (ี + ่).
// NFC doesn't fix Thai combining-char order, so we normalize manually.
function normalizeThai(s: string): string {
  return s.replace(/([่-๋])([ัิ-ื็])/g, "$2$1");
}

// Precomputed: "service::normalizedSlug" → location key
const slugLookup: Record<string, string> = {};
for (const [service, svc] of Object.entries(serviceMap)) {
  for (const location of Object.keys(locationMap)) {
    const key = `${service}::${normalizeThai(svc.keyword + location)}`;
    slugLookup[key] = location;
  }
}

function parseSlug(service: string, slug: string) {
  const svc = serviceMap[service as ServiceKey];
  if (!svc) return null;
  // Next.js 15 passes path params URL-encoded for non-ASCII characters
  const decoded = slug.includes("%") ? decodeURIComponent(slug) : slug;
  const location = slugLookup[`${service}::${normalizeThai(decoded)}`];
  if (!location) return null;
  return { svc, location };
}

const locationFullName: Record<string, string> = locationMap;

/* ─── Static params (48 pages) ──────────────────────────── */

export async function generateStaticParams() {
  const params: { service: string; slug: string }[] = [];
  for (const [service, svc] of Object.entries(serviceMap)) {
    for (const location of Object.keys(locationMap)) {
      params.push({ service, slug: `${svc.keyword}${location}` });
    }
  }
  return params;
}

/* ─── Metadata ──────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; slug: string }>;
}): Promise<Metadata> {
  const { service, slug } = await params;
  const parsed = parseSlug(service, slug);
  if (!parsed) return {};
  const { svc, location } = parsed;
  const fullLoc = locationFullName[location];
  return {
    title: `${svc.keyword}${location} ราคาถูก มีใบอนุญาต | แม่บ้านดีดี เซอร์วิส`,
    description: `${svc.keyword}${location} ผ่านตรวจโรค ตรวจประวัติ มีใบอนุญาตถูกต้อง ราคา ${svc.priceRange} ${svc.priceUnit} โทร 061-843-7666 | แม่บ้านดีดีเซอร์วิส`,
    alternates: { canonical: `https://www.maidwonderland.com/services/${service}/${slug}` },
  };
}

/* ─── Page ───────────────────────────────────────────────── */

export default async function ServiceLocationPage({
  params,
}: {
  params: Promise<{ service: string; slug: string }>;
}) {
  const { service, slug } = await params;
  const parsed = parseSlug(service, slug);
  if (!parsed) notFound();
  const { svc, location } = parsed;
  const fullLoc = locationFullName[location];
  const otherLocations = Object.keys(locationMap).filter((l) => l !== location);

  /* JSON-LD schema */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "หน้าแรก",    item: "https://www.maidwonderland.com/" },
          { "@type": "ListItem", position: 2, name: svc.title,     item: `https://www.maidwonderland.com/services/${service}` },
          { "@type": "ListItem", position: 3, name: `${svc.keyword}${location}`, item: `https://www.maidwonderland.com/services/${service}/${slug}` },
        ],
      },
      {
        "@type": "Service",
        name: `บริการ${svc.keyword}${location}`,
        description: `${svc.desc} ให้บริการครอบคลุมพื้นที่${fullLoc}`,
        provider: {
          "@type": "LocalBusiness",
          name: "หจก.จัดหางานแม่บ้านดีดี เซอร์วิส",
          telephone: "0618437666",
          address: {
            "@type": "PostalAddress",
            streetAddress: "206, 208 ถ.เจริญสนิทวงศ์ 82",
            addressLocality: "แขวงบางอ้อ เขตบางพลัด",
            addressRegion: "กรุงเทพมหานคร",
            postalCode: "10700",
            addressCountry: "TH",
          },
          areaServed: fullLoc,
          priceRange: svc.priceRange,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CloneNavbar />
      <GSAPAnimations />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #F5E6BE 0%, #EDD49E 40%, #F0DDB8 70%, #F8EDD3 100%)" }}>
          <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
          <div data-blob
            className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full z-0"
            style={{ background: "radial-gradient(circle, rgba(201,169,110,0.25) 0%, transparent 70%)", filter: "blur(100px)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              <Reveal>
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-xs text-ink-muted mb-5" aria-label="breadcrumb">
                  <Link href="/" className="hover:text-gold-dark transition-colors">หน้าแรก</Link>
                  <span className="text-gold/50">›</span>
                  <Link href={`/services/${service}`} className="hover:text-gold-dark transition-colors">{svc.title}</Link>
                  <span className="text-gold/50">›</span>
                  <span className="text-ink font-medium">{svc.keyword}{location}</span>
                </nav>

                <span className="sec-badge mb-4">{svc.badge}</span>
                <h1 className="font-black text-ink mt-4 mb-4" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
                  บริการ{" "}
                  <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                    {svc.keyword}{location}
                  </span>
                </h1>
                <p className="text-ink-muted text-base lg:text-lg leading-relaxed mb-6">
                  {svc.desc} ให้บริการครอบคลุมพื้นที่{fullLoc}
                </p>

                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-white border border-[#EDE8DF] rounded-2xl px-5 py-3 shadow-[0_4px_24px_rgba(100,60,0,0.08)]">
                    <Banknote size={18} className="text-gold-dark" />
                    <div>
                      <div className="text-[10px] text-ink-muted font-medium uppercase tracking-wide">ราคาเริ่มต้น</div>
                      <div className="font-black text-lg bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent leading-none">
                        {svc.priceStart}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-[#EDE8DF] rounded-2xl px-5 py-3 shadow-[0_4px_24px_rgba(100,60,0,0.08)]">
                    <Clock size={18} className="text-gold-dark" />
                    <div>
                      <div className="text-[10px] text-ink-muted font-medium uppercase tracking-wide">ทำงาน</div>
                      <div className="font-black text-base text-ink leading-none">{svc.workTime}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="tel:0618437666" style={{
                    display: "flex", alignItems: "stretch", borderRadius: 14,
                    overflow: "hidden", textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(243,0,60,0.35)",
                  }}>
                    <span style={{ background: "#C4006A", padding: "12px 14px", display: "flex", alignItems: "center" }}>
                      <Image src="/icon/calling-icon.svg" alt="โทร" width={22} height={22} style={{ filter: "brightness(0) invert(1)", width: 22, height: 22 }} />
                    </span>
                    <span style={{ background: "linear-gradient(180deg,#FF00CB 0%,#F3003C 100%)", padding: "12px 18px", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                      โทรสอบถามเลย
                    </span>
                  </a>
                  <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "stretch", borderRadius: 14,
                    overflow: "hidden", textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(6,109,0,0.35)",
                  }}>
                    <span style={{ background: "#04520A", padding: "12px 14px", display: "flex", alignItems: "center" }}>
                      <Image src="/icon/line-icon.svg" alt="LINE" width={22} height={22} style={{ width: 22, height: 22 }} />
                    </span>
                    <span style={{ background: "linear-gradient(180deg,#3EB600 0%,#066D00 100%)", padding: "12px 18px", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                      แอด LINE
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(100,60,0,0.18)]"
                  style={{ border: "1.5px solid rgba(201,169,110,0.35)" }}>
                  <Image src={svc.img} alt={`${svc.keyword}${location} ${fullLoc}`} width={800} height={600}
                    className="w-full block object-cover" style={{ aspectRatio: "4/3", height: "auto" }} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="relative bg-white overflow-hidden py-12 lg:py-16">
          <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-50" />
          <div className="relative z-10 max-w-5xl mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

              <div>
                <Reveal>
                  <span className="sec-badge mb-4">งานที่รับผิดชอบ</span>
                  <h2 className="font-black text-ink mt-4 mb-6" style={{ fontSize: "clamp(24px,3vw,36px)" }}>
                    งานที่{" "}
                    <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                      {svc.keyword}ทำ
                    </span>
                  </h2>
                </Reveal>
                <div className="grid gap-3">
                  {svc.features.map((f, i) => (
                    <Reveal key={f} delay={i * 60}>
                      <div className="flex items-center gap-3 bg-[#FBF8F2] border border-[#EDE8DF] rounded-xl px-4 py-3">
                        <CheckCircle2 size={16} className="text-gold-dark shrink-0" strokeWidth={2.5} />
                        <span className="text-[14px] font-medium text-ink">{f}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div>
                <Reveal delay={80}>
                  <span className="sec-badge mb-4">มาตรฐาน</span>
                  <h2 className="font-black text-ink mt-4 mb-6" style={{ fontSize: "clamp(24px,3vw,36px)" }}>
                    ผ่านการ{" "}
                    <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">รับรอง</span>
                  </h2>
                </Reveal>
                <div className="grid gap-3">
                  {svc.guarantees.map(({ Icon, text }, i) => (
                    <Reveal key={text} delay={80 + i * 60}>
                      <div className="flex items-center gap-3 bg-[#FBF8F2] border border-[#EDE8DF] rounded-xl px-4 py-3">
                        <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg,#C9A96E 0%,#9E7D48 100%)" }}>
                          <Icon size={14} color="#fff" strokeWidth={2.5} />
                        </div>
                        <span className="text-[14px] font-medium text-ink">{text}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Pricing */}
                <Reveal delay={200}>
                  <div className="mt-8 bg-[#FBF8F2] border border-gold/25 rounded-2xl p-6"
                    style={{ boxShadow: "0 8px 32px rgba(201,169,110,0.12)" }}>
                    <div className="text-[10px] font-black tracking-[0.16em] uppercase text-gold-dark mb-3">
                      ค่าบริการ{svc.keyword}{location}
                    </div>
                    <div className="font-black text-3xl bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent mb-1">
                      {svc.priceRange}
                    </div>
                    <div className="text-ink-muted text-sm font-medium mb-4">{svc.priceUnit}</div>
                    <p className="text-xs text-ink-muted leading-relaxed">* {svc.priceNote}</p>
                  </div>
                </Reveal>

                {/* Other locations */}
                <Reveal delay={260}>
                  <div className="mt-6 pt-5 border-t border-[#EDE8DF]">
                    <p className="text-[10px] font-black tracking-[0.14em] uppercase text-gold-dark mb-3">
                      {svc.keyword}พื้นที่อื่นๆ
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {otherLocations.map((loc) => (
                        <Link
                          key={loc}
                          href={`/services/${service}/${svc.keyword}${loc}`}
                          className="text-xs font-medium text-ink-muted border border-[#EDE8DF] rounded-full px-3 py-1.5 hover:border-gold/50 hover:text-gold-dark transition-colors duration-200"
                        >
                          {svc.keyword}{loc}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

      </main>
      <CloneFooter />
    </>
  );
}
