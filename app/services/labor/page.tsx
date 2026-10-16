import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import ServicePageContent from "@/components/ServicePageContent";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "บริการแรงงานทั่วไป | แม่บ้านดีดี เซอร์วิส",
  description: "บริการจัดหาแรงงานทั่วไป รายวัน ราคา 353–500 บาท/วัน พร้อมทำงานได้ทันที ส่งทั่วกรุงเทพและ 56 จังหวัด",
  alternates: { canonical: "https://www.maidwonderland.com/services/labor" },
  openGraph: {
    title: "บริการแรงงานทั่วไป | แม่บ้านดีดี เซอร์วิส",
    description: "บริการจัดหาแรงงานทั่วไป รายวัน ราคา 353–500 บาท/วัน พร้อมทำงานได้ทันที ส่งทั่วกรุงเทพและ 56 จังหวัด",
    url: "https://www.maidwonderland.com/services/labor",
    siteName: "แม่บ้านดีดี เซอร์วิส",
    images: [{ url: "/images/bg_header.webp", width: 1920, height: 800, alt: "แม่บ้านดีดี เซอร์วิส" }],
    locale: "th_TH",
    type: "website",
  },
};

export default function LaborServicePage() {
  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>
        <ServicePageContent
          serviceKey="labor"
          imageSrc={IMG.labor}
          imageAlt="แรงงานทั่วไป"
          priceRange="353 – 500"
          workHours="08:00 – 17:00"
          isMonthly={false}
        />
      </main>
      <CloneFooter />
    </>
  );
}
