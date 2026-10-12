import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "นโยบายคุกกี้ | แม่บ้านดีดีเซอร์วิส",
  description: "นโยบายการใช้คุกกี้ของเว็บไซต์ maidwonderland.com การเก็บรวบรวมข้อมูลและวิธีจัดการคุกกี้",
};

const sections = [
  {
    title: "คุกกี้คืออะไร",
    content: (
      <p>
        คุกกี้ (Cookies) คือไฟล์ข้อมูลขนาดเล็กที่เว็บไซต์บันทึกลงในเบราว์เซอร์ของท่าน
        เพื่อจดจำข้อมูลการเข้าชมและพฤติกรรมการใช้งาน ช่วยให้เว็บไซต์ทำงานได้อย่างมีประสิทธิภาพ
        และปรับปรุงประสบการณ์การใช้งานให้เหมาะกับท่าน
      </p>
    ),
  },
  {
    title: "ประเภทคุกกี้ที่เราใช้",
    content: (
      <div className="space-y-3">
        <div>
          <p className="font-bold text-[13px] mb-1" style={{ color: "#1A1410" }}>คุกกี้ที่จำเป็น (Strictly Necessary)</p>
          <p>คุกกี้พื้นฐานที่ทำให้เว็บไซต์ทำงานได้ตามปกติ เช่น การจดจำการยอมรับคุกกี้
          ไม่สามารถปิดการทำงานได้โดยไม่กระทบต่อฟังก์ชันหลักของเว็บไซต์</p>
        </div>
        <div>
          <p className="font-bold text-[13px] mb-1" style={{ color: "#1A1410" }}>คุกกี้วิเคราะห์ (Analytics)</p>
          <p>ช่วยให้บริษัทเข้าใจวิธีที่ผู้เข้าชมใช้งานเว็บไซต์ เช่น หน้าที่เข้าชมบ่อย
          เวลาที่ใช้ในแต่ละหน้า เพื่อปรับปรุงคุณภาพเนื้อหาและประสบการณ์ผู้ใช้</p>
        </div>
        <div>
          <p className="font-bold text-[13px] mb-1" style={{ color: "#1A1410" }}>คุกกี้การตลาด (Marketing)</p>
          <p>ใช้ติดตามพฤติกรรมการเข้าชมเพื่อแสดงโฆษณาที่เกี่ยวข้องกับท่าน
          บนเว็บไซต์ของบริษัทและแพลตฟอร์มพันธมิตร (เฉพาะกรณีที่ท่านยินยอม)</p>
        </div>
      </div>
    ),
  },
  {
    title: "คุกกี้จากบุคคลที่สาม",
    content: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong>Google Analytics:</strong> วิเคราะห์สถิติการเข้าชมเว็บไซต์</li>
        <li><strong>Meta Pixel (Facebook):</strong> ติดตามประสิทธิภาพโฆษณา</li>
        <li><strong>LINE Tag:</strong> วิเคราะห์การแปลงผลจากช่องทาง LINE</li>
      </ul>
    ),
  },
  {
    title: "ระยะเวลาของคุกกี้",
    content: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong>Session cookies:</strong> ลบอัตโนมัติเมื่อปิดเบราว์เซอร์</li>
        <li><strong>Persistent cookies:</strong> เก็บไว้ตามระยะเวลาที่กำหนด โดยทั่วไป 30 วัน ถึง 2 ปี</li>
        <li>คุกกี้การยอมรับของท่านจะถูกเก็บไว้ 12 เดือน</li>
      </ul>
    ),
  },
  {
    title: "การจัดการและปฏิเสธคุกกี้",
    content: (
      <>
        <p className="mb-2">ท่านสามารถจัดการคุกกี้ได้ผ่าน:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>แบนเนอร์ความยินยอมคุกกี้เมื่อเข้าเว็บไซต์ครั้งแรก</li>
          <li>การตั้งค่าเบราว์เซอร์ของท่าน (Chrome, Safari, Firefox, Edge)</li>
          <li>เครื่องมือ opt-out ของ Google Analytics: <span style={{ color: "#9E7D48" }}>tools.google.com/dlpage/gaoptout</span></li>
        </ul>
        <p className="mt-2 text-[13px]" style={{ color: "#7A6040" }}>
          หมายเหตุ: การปิดคุกกี้บางประเภทอาจส่งผลต่อการทำงานของเว็บไซต์
        </p>
      </>
    ),
  },
  {
    title: "การอัปเดตนโยบายคุกกี้",
    content: (
      <p>
        บริษัทอาจปรับปรุงนโยบายคุกกี้นี้เป็นครั้งคราวตามการเปลี่ยนแปลงของเทคโนโลยีหรือกฎหมาย
        ท่านควรตรวจสอบหน้านี้เป็นระยะเพื่อรับทราบการเปลี่ยนแปลง
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      badge="นโยบายคุกกี้"
      title="นโยบายการใช้คุกกี้"
      subtitle="เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานและวิเคราะห์สถิติเว็บไซต์"
      updatedAt="1 มกราคม 2568"
      sections={sections}
    />
  );
}
