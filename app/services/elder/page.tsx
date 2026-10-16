import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import ServicePageContent from "@/components/ServicePageContent";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "บริการดูแลผู้สูงอายุ | แม่บ้านดีดี เซอร์วิส",
  description: "บริการจัดหาผู้ดูแลผู้สูงอายุ ผ่านการอบรมเฉพาะทาง ตรวจโรค ตรวจประวัติ ราคา 12,000–16,000 บาท/เดือน โทร 061-843-7666",
  alternates: { canonical: "https://www.maidwonderland.com/services/elder" },
  openGraph: {
    title: "บริการดูแลผู้สูงอายุ | แม่บ้านดีดี เซอร์วิส",
    description: "บริการจัดหาผู้ดูแลผู้สูงอายุ ผ่านการอบรมเฉพาะทาง ตรวจโรค ตรวจประวัติ ราคา 12,000–16,000 บาท/เดือน โทร 061-843-7666",
    url: "https://www.maidwonderland.com/services/elder",
    siteName: "แม่บ้านดีดี เซอร์วิส",
    images: [{ url: "/images/bg_header.webp", width: 1920, height: 800, alt: "แม่บ้านดีดี เซอร์วิส" }],
    locale: "th_TH",
    type: "website",
  },
};

export default function ElderServicePage() {
  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>
        <ServicePageContent
          serviceKey="elder"
          imageSrc={IMG.elder}
          imageAlt="ดูแลผู้สูงอายุ"
          priceRange="12,000 – 16,000"
          workHours="จ.–ส. 08:00–17:00"
          isMonthly={true}
        />
      </main>
      <CloneFooter />
    </>
  );
}
