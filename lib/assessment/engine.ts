import type { Answers, AssessmentResult, Service } from "./types";

const VERSION = "1.0";

function result(
  service: Service,
  reasons: string[],
  precautions: string[] = [],
  specialist = false,
  alternative?: Service,
): AssessmentResult {
  return { service, reasons, alternative, specialist_review_required: specialist, precautions, rule_engine_version: VERSION };
}

export function computeResult(a: Answers): AssessmentResult {
  const household = a.household ?? [];
  const hasChild = household.some(v => ["baby", "toddler", "preschool", "school"].includes(v));
  const hasElder = household.some(v => ["independent", "assisted", "dependent"].includes(v));

  const childHigh =
    household.includes("baby") ||
    ["primary", "infant", "multiple"].includes(a.childcare ?? "");

  const elderHigh =
    ["assisted", "dependent"].some(v => household.includes(v)) ||
    ["mobility", "continuous", "medical"].includes(a.eldercare ?? "");

  const heavy = a.housework === "high";
  const multiShift = ["night", "multiple"].includes(a.schedule ?? "");
  const medical = a.eldercare === "medical";

  // ── Hard rules (evaluated in order) ─────────────────────────────────────

  // Rule 1: Medical care → CUSTOM + specialist review
  if (medical) {
    return result(
      "CUSTOM",
      ["มีการดูแลด้านสุขภาพที่ต้องประเมินโดยผู้เชี่ยวชาญ"],
      ["โปรดแจ้งรายละเอียดงานด้านสุขภาพให้เจ้าหน้าที่ทราบก่อนเริ่มงาน", "แม่บ้านและผู้ดูแลทั่วไปไม่ใช่ผู้ให้บริการทางการแพทย์"],
      true,
    );
  }

  // Rule 2: Both child AND elder → CUSTOM
  if (hasChild && hasElder) {
    return result(
      "CUSTOM",
      ["มีทั้งเด็กและผู้สูงอายุที่ต้องดูแลในบ้านเดียวกัน", "ควรประเมินการแบ่งหน้าที่และจำนวนแม่บ้าน"],
      ["อาจต้องพิจารณาจ้างแม่บ้านสองคนแยกหน้าที่กัน", "เจ้าหน้าที่จะช่วยออกแบบโครงสร้างที่เหมาะสม"],
    );
  }

  // Rule 3: Heavy housework + intensive childcare or eldercare → CUSTOM
  if (heavy && (childHigh || elderHigh)) {
    return result(
      "CUSTOM",
      ["งานบ้านในระดับสูงและการดูแลเฉพาะทางต้องทำพร้อมกัน", "แม่บ้านหนึ่งคนอาจไม่สามารถรับภาระนี้ได้ทั้งหมด"],
      ["ควรพิจารณาแบ่งหน้าที่หรือจ้างแม่บ้านเพิ่มเติม"],
    );
  }

  // Rule 4: Intensive care + multi-shift → CUSTOM
  if ((childHigh || elderHigh) && multiShift) {
    return result(
      "CUSTOM",
      ["ต้องการการดูแลอย่างต่อเนื่องหลายช่วงเวลารวมถึงกลางคืน"],
      ["แม่บ้านมีสิทธิ์พักตามกฎหมายแรงงาน", "ควรประเมินการแบ่งกะหรือจำนวนผู้ดูแลที่เหมาะสม"],
    );
  }

  // Rule 5: Elder high care → ELDERLY_CAREGIVER
  if (elderHigh) {
    return result(
      "ELDERLY_CAREGIVER",
      ["ผู้สูงอายุต้องการการดูแลในระดับสูง", "ต้องการผู้ดูแลที่มีทักษะเฉพาะด้านการดูแลผู้สูงอายุ"],
      ["ควรระบุรายละเอียดกิจวัตรประจำวันและข้อจำกัดทางร่างกายให้ชัดเจน"],
    );
  }

  // Rule 6: Primary child / infant → NANNY
  if (childHigh) {
    return result(
      "NANNY",
      ["เด็กเป็นงานหลักและต้องการการดูแลอย่างใกล้ชิด", "พี่เลี้ยงเด็กมีทักษะและการฝึกอบรมที่เหมาะสม"],
      ["ควรระบุช่วงอายุและจำนวนเด็กให้ชัดเจน"],
    );
  }

  // Rule 7: Has child + not heavy + child is secondary → HOUSEKEEPER_NANNY
  if (hasChild && !heavy && !["primary", "infant"].includes(a.childcare ?? "")) {
    return result(
      "HOUSEKEEPER_NANNY",
      ["มีเด็กในบ้านแต่งานบ้านยังเป็นภาระหลัก", "แม่บ้านที่มีทักษะดูแลเด็กเสริมเหมาะสมกว่า"],
      ["ไม่ควรให้แม่บ้านดูแลเด็กและทำงานบ้านหนักในเวลาเดียวกัน", "ควรตกลงลำดับความสำคัญให้ชัดเจน"],
      false,
      "NANNY",
    );
  }

  // Rule 8: Has elder (independent/companion level) + housework primary → HOUSEKEEPER_ELDERLY
  if (hasElder && a.priority !== "elder") {
    return result(
      "HOUSEKEEPER_ELDERLY",
      ["มีผู้สูงอายุที่ช่วยตัวเองได้ในระดับหนึ่ง", "งานบ้านเป็นหลัก แต่ต้องการความเอาใจใส่และอ่อนโยน"],
      ["ควรระบุขอบเขตการดูแลผู้สูงอายุให้ชัดเจน"],
      false,
      "ELDERLY_CAREGIVER",
    );
  }

  // Rule 9: Priority-based for edge cases
  if (a.priority === "child" && hasChild) {
    return result("NANNY", ["ลำดับความสำคัญหลักคือดูแลเด็ก"], []);
  }
  if (a.priority === "elder" && hasElder) {
    return result("ELDERLY_CAREGIVER", ["ลำดับความสำคัญหลักคือดูแลผู้สูงอายุ"], []);
  }

  // Default: HOUSEKEEPER
  return result(
    "HOUSEKEEPER",
    ["ไม่มีงานดูแลเฉพาะทาง", "เน้นงานบ้านและความเรียบร้อยเป็นหลัก"],
    [],
  );
}

export function buildRequirements(a: Answers, serviceName: string): string {
  const parts: string[] = [`ผลประเมิน: ${serviceName}`];
  if (a.start && a.start !== "research") parts.push(`เริ่มงาน: ${a.start}`);
  if (a.arrangement) parts.push(`รูปแบบ: ${a.arrangement === "livein" ? "พักอาศัย" : a.arrangement === "liveout" ? "ไป-กลับ" : "ยังไม่แน่ใจ"}`);
  if (a.budget && a.budget !== "unsure") parts.push(`งบ: ${a.budget}`);
  if (a.notes) parts.push(`หมายเหตุ: ${a.notes}`);
  return parts.join(" | ");
}
