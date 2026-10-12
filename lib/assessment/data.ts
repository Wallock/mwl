import type { Question, QuestionId, Service } from "./types";

// ── Questions ────────────────────────────────────────────────────────────────

export const QUESTIONS: Record<QuestionId, Question> = {
  needs: {
    id: "needs",
    question: "ตอนนี้คุณต้องการให้แม่บ้านเข้ามาช่วยเรื่องใดมากที่สุด?",
    type: "multi",
    required: true,
    exclusiveValues: ["unsure"],
    options: [
      { value: "clean",   label: "ทำความสะอาดและดูแลความเรียบร้อยของบ้าน" },
      { value: "laundry", label: "ซักผ้า รีดผ้า จัดของ และงานบ้านประจำวัน" },
      { value: "child",   label: "ช่วยดูแลเด็กหรือเลี้ยงลูก" },
      { value: "elder",   label: "ช่วยดูแลผู้สูงอายุ" },
      { value: "mixed",   label: "ทำงานบ้านควบคู่กับช่วยดูแลคนในครอบครัว" },
      { value: "unsure",  label: "ยังไม่แน่ใจ อยากให้ระบบช่วยวิเคราะห์" },
    ],
  },
  household: {
    id: "household",
    question: "ภายในบ้านมีใครที่ต้องการการดูแลเป็นพิเศษหรือไม่?",
    type: "multi",
    required: true,
    exclusiveValues: ["none"],
    options: [
      { value: "none",        label: "ไม่มี เน้นดูแลบ้านเท่านั้น" },
      { value: "baby",        label: "เด็กแรกเกิดถึง 12 เดือน" },
      { value: "toddler",     label: "เด็กอายุ 1–3 ปี" },
      { value: "preschool",   label: "เด็กอายุ 4–6 ปี" },
      { value: "school",      label: "เด็กอายุ 7–12 ปี" },
      { value: "independent", label: "ผู้สูงอายุช่วยเหลือตัวเองได้" },
      { value: "assisted",    label: "ผู้สูงอายุที่ต้องมีคนช่วยเหลือกิจวัตร" },
      { value: "dependent",   label: "ผู้สูงอายุที่ต้องดูแลใกล้ชิดตลอดเวลา" },
    ],
  },
  housework: {
    id: "housework",
    question: "คุณต้องการให้แม่บ้านช่วยงานบ้านมากน้อยเพียงใด?",
    type: "single",
    required: true,
    options: [
      { value: "low",    label: "เล็กน้อย เน้นจัดของและดูแลความเรียบร้อย" },
      { value: "medium", label: "ปานกลาง ทำความสะอาด ซักรีด และงานทั่วไป" },
      { value: "high",   label: "มาก ต้องดูแลบ้านหลายส่วนทุกวัน" },
      { value: "none",   label: "ไม่ต้องทำงานบ้าน ต้องการเน้นดูแลคนเท่านั้น" },
    ],
  },
  home: {
    id: "home",
    question: "ที่พักอาศัยของคุณเป็นลักษณะใด?",
    type: "single",
    required: true,
    options: [
      { value: "condo",     label: "คอนโด / อพาร์ตเมนต์" },
      { value: "townhome",  label: "ทาวน์เฮาส์ / ทาวน์โฮม" },
      { value: "house",     label: "บ้านเดี่ยวขนาดเล็กถึงกลาง" },
      { value: "large",     label: "บ้านเดี่ยวขนาดใหญ่หรือหลายชั้น" },
      { value: "estate",    label: "บ้านขนาดใหญ่ที่มีพื้นที่ดูแลหลายส่วน" },
      { value: "other",     label: "อื่น ๆ" },
    ],
  },
  members: {
    id: "members",
    question: "ปกติมีสมาชิกอาศัยอยู่ในบ้านกี่คน?",
    type: "single",
    required: true,
    options: [
      { value: "1-2", label: "1–2 คน" },
      { value: "3-4", label: "3–4 คน" },
      { value: "5-6", label: "5–6 คน" },
      { value: "7+",  label: "7 คนขึ้นไป" },
    ],
  },
  childcare: {
    id: "childcare",
    question: "คุณต้องการให้แม่บ้านช่วยดูแลเด็กในลักษณะใด?",
    type: "single",
    required: true,
    options: [
      { value: "occasional", label: "ช่วยดูแลเป็นบางช่วง โดยมีพ่อแม่อยู่ด้วย" },
      { value: "routine",    label: "ช่วยรับส่ง เตรียมอาหาร และดูแลกิจวัตร" },
      { value: "primary",    label: "ดูแลเด็กเป็นหลักในเวลาที่พ่อแม่ทำงาน" },
      { value: "infant",     label: "ดูแลทารกหรือเด็กเล็กอย่างใกล้ชิด" },
      { value: "multiple",   label: "ต้องดูแลเด็กหลายคนพร้อมกัน" },
    ],
  },
  eldercare: {
    id: "eldercare",
    question: "ผู้สูงอายุที่บ้านต้องการความช่วยเหลือในระดับใด?",
    type: "single",
    required: true,
    options: [
      { value: "companion",  label: "อยู่เป็นเพื่อน ชวนพูดคุย และช่วยงานเล็กน้อย" },
      { value: "routine",    label: "ช่วยเตรียมอาหารและดูแลความเป็นอยู่" },
      { value: "mobility",   label: "ช่วยเดิน เคลื่อนย้าย อาบน้ำ หรือแต่งตัว" },
      { value: "continuous", label: "ต้องดูแลใกล้ชิดเพราะช่วยเหลือตนเองได้น้อย" },
      { value: "medical",    label: "มีการดูแลด้านสุขภาพที่ต้องประเมินเป็นพิเศษ" },
    ],
  },
  priority: {
    id: "priority",
    question: "หากแม่บ้านทำงานได้เพียงหนึ่งอย่างในช่วงเวลาเดียวกัน คุณต้องการให้เน้นงานไหนก่อน?",
    type: "single",
    required: true,
    options: [
      { value: "home",  label: "งานบ้าน" },
      { value: "child", label: "ดูแลเด็ก" },
      { value: "elder", label: "ดูแลผู้สูงอายุ" },
      { value: "equal", label: "มีความสำคัญเท่ากัน และต้องการคำแนะนำเรื่องจำนวนแม่บ้าน" },
    ],
  },
  arrangement: {
    id: "arrangement",
    question: "คุณสะดวกให้แม่บ้านทำงานในรูปแบบใด?",
    type: "single",
    required: true,
    options: [
      { value: "liveout", label: "ไป-กลับทุกวัน" },
      { value: "livein",  label: "พักอาศัยที่บ้านนายจ้าง" },
      { value: "unsure",  label: "ยังไม่แน่ใจ ต้องการคำแนะนำ" },
    ],
  },
  schedule: {
    id: "schedule",
    question: "คุณต้องการความช่วยเหลือช่วงใดเป็นหลัก?",
    type: "single",
    required: true,
    options: [
      { value: "day",      label: "เวลากลางวัน" },
      { value: "evening",  label: "ช่วงเย็น" },
      { value: "night",    label: "ช่วงกลางคืน" },
      { value: "multiple", label: "ต้องการความช่วยเหลือหลายช่วงเวลา" },
      { value: "unsure",   label: "ยังไม่แน่ใจ" },
    ],
  },
  budget: {
    id: "budget",
    question: "คุณมีงบประมาณสำหรับค่าจ้างแม่บ้านประมาณเท่าไรต่อเดือน?",
    type: "single",
    required: true,
    options: [
      { value: "under12", label: "ต่ำกว่า 12,000 บาท" },
      { value: "12-15",   label: "12,000–15,000 บาท" },
      { value: "15-20",   label: "15,001–20,000 บาท" },
      { value: "20-25",   label: "20,001–25,000 บาท" },
      { value: "over25",  label: "มากกว่า 25,000 บาท" },
      { value: "unsure",  label: "ยังไม่ได้กำหนดงบประมาณ" },
    ],
  },
  start: {
    id: "start",
    question: "คุณต้องการให้แม่บ้านเริ่มงานเมื่อไร?",
    type: "single",
    required: true,
    options: [
      { value: "asap",     label: "เร็วที่สุด" },
      { value: "7d",       label: "ภายใน 7 วัน" },
      { value: "15d",      label: "ภายใน 15 วัน" },
      { value: "30d",      label: "ภายใน 30 วัน" },
      { value: "research", label: "กำลังศึกษาข้อมูลก่อน" },
    ],
  },
  notes: {
    id: "notes",
    question: "มีรายละเอียดอื่น ๆ ที่อยากให้เราช่วยพิจารณาหรือไม่?",
    type: "textarea",
    required: false,
    placeholder: "เช่น ต้องการแม่บ้านที่ทำอาหารได้ บ้านมีสัตว์เลี้ยง ต้องการคนมีประสบการณ์ดูแลเด็กเล็ก หรือมีงานเฉพาะอื่น ๆ (ไม่ต้องระบุข้อมูลสุขภาพ)",
    maxLength: 500,
  },
};

// ── Fixed question order (Q6/Q7 injected conditionally) ─────────────────────

export const BASE_ORDER: QuestionId[] = [
  "needs", "household", "housework", "home", "members",
  "priority", "arrangement", "schedule", "budget", "start", "notes",
];

export function getVisibleQuestions(answers: { household?: string[] }): QuestionId[] {
  const h = answers.household ?? [];
  const hasChild = h.some(v => ["baby", "toddler", "preschool", "school"].includes(v));
  const hasElder = h.some(v => ["independent", "assisted", "dependent"].includes(v));

  const order: QuestionId[] = ["needs", "household", "housework", "home", "members"];
  if (hasChild) order.push("childcare");
  if (hasElder) order.push("eldercare");
  order.push("priority", "arrangement", "schedule", "budget", "start", "notes");
  return order;
}

// ── Service display info ─────────────────────────────────────────────────────

export const SERVICE_INFO: Record<Service, { name: string; desc: string; duties: string[] }> = {
  HOUSEKEEPER: {
    name: "แม่บ้านทั่วไป",
    desc: "เหมาะกับบ้านที่ต้องการคนดูแลความสะอาด ซักรีด และงานบ้านครบวงจร",
    duties: ["ทำความสะอาดบ้าน", "ซักรีดผ้า", "จัดเก็บของ", "ดูแลความเรียบร้อยทั่วไป"],
  },
  HOUSEKEEPER_NANNY: {
    name: "แม่บ้านกึ่งพี่เลี้ยงเด็ก",
    desc: "เหมาะเมื่อต้องการคนดูแลบ้านเป็นหลัก พร้อมช่วยดูแลเด็กในบางช่วงเวลา",
    duties: ["งานบ้านเป็นหลัก", "ช่วยดูแลเด็กเสริม", "เตรียมอาหารสำหรับเด็ก", "รับส่งหรือดูแลเด็กบางช่วง"],
  },
  HOUSEKEEPER_ELDERLY: {
    name: "แม่บ้านกึ่งดูแลผู้สูงอายุ",
    desc: "เหมาะเมื่อผู้สูงอายุในบ้านช่วยตัวเองได้ แต่ต้องการความเอาใจใส่ควบคู่งานบ้าน",
    duties: ["งานบ้านเป็นหลัก", "ดูแลความเป็นอยู่ผู้สูงอายุ", "เตรียมอาหาร", "อยู่เป็นเพื่อน"],
  },
  NANNY: {
    name: "พี่เลี้ยงเด็กโดยเฉพาะ",
    desc: "เหมาะเมื่อเด็กเป็นงานหลัก ผ่านการอบรมดูแลเด็กโดยเฉพาะ",
    duties: ["ดูแลเด็กเป็นหลัก", "กิจวัตรประจำวันของเด็ก", "เล่นและพัฒนาการ", "รับส่งโรงเรียน"],
  },
  ELDERLY_CAREGIVER: {
    name: "ผู้ดูแลผู้สูงอายุโดยเฉพาะ",
    desc: "เหมาะเมื่อผู้สูงอายุต้องการการดูแลอย่างใกล้ชิด มีทักษะเฉพาะด้านการดูแลผู้ป่วย",
    duties: ["ดูแลผู้สูงอายุเป็นหลัก", "ช่วยกิจวัตร อาบน้ำ แต่งตัว", "เคลื่อนย้ายอย่างปลอดภัย", "ดูแลยาและนัดแพทย์"],
  },
  CUSTOM: {
    name: "ให้เจ้าหน้าที่ประเมินเพิ่มเติม",
    desc: "ความต้องการของคุณมีความซับซ้อน เจ้าหน้าที่จะช่วยออกแบบโซลูชันที่เหมาะสมที่สุด",
    duties: ["ประเมินรายละเอียดเฉพาะ", "แนะนำจำนวนแม่บ้านที่เหมาะสม", "ออกแบบขอบเขตงาน", "ประสานงานกับผู้เชี่ยวชาญ"],
  },
};

// ── Province list (77 provinces) ─────────────────────────────────────────────

export const PROVINCES: string[] = [
  "กรุงเทพมหานคร", "กระบี่", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร",
  "ขอนแก่น", "จันทบุรี", "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท",
  "ชัยภูมิ", "ชุมพร", "เชียงราย", "เชียงใหม่", "ตรัง",
  "ตราด", "ตาก", "นครนายก", "นครปฐม", "นครพนม",
  "นครราชสีมา", "นครศรีธรรมราช", "นครสวรรค์", "นนทบุรี", "นราธิวาส",
  "น่าน", "บึงกาฬ", "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์",
  "ปราจีนบุรี", "ปัตตานี", "พระนครศรีอยุธยา", "พะเยา", "พังงา",
  "พัทลุง", "พิจิตร", "พิษณุโลก", "เพชรบุรี", "เพชรบูรณ์",
  "แพร่", "ภูเก็ต", "มหาสารคาม", "มุกดาหาร", "แม่ฮ่องสอน",
  "ยโสธร", "ยะลา", "ร้อยเอ็ด", "ระนอง", "ระยอง",
  "ราชบุรี", "ลพบุรี", "ลำปาง", "ลำพูน", "เลย",
  "ศรีสะเกษ", "สกลนคร", "สงขลา", "สตูล", "สมุทรปราการ",
  "สมุทรสงคราม", "สมุทรสาคร", "สระแก้ว", "สระบุรี", "สิงห์บุรี",
  "สุโขทัย", "สุพรรณบุรี", "สุราษฎร์ธานี", "สุรินทร์", "หนองคาย",
  "หนองบัวลำภู", "อ่างทอง", "อำนาจเจริญ", "อุดรธานี", "อุตรดิตถ์",
  "อุทัยธานี", "อุบลราชธานี",
];
