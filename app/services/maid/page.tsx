import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import ServicePageContent from "@/components/ServicePageContent";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "บริการแม่บ้านทั่วไป | แม่บ้านดีดี เซอร์วิส",
  description: "บริการจัดหาแม่บ้านทั่วไป ทำความสะอาดบ้าน ซักรีด ทำอาหาร ราคา 11,000–13,000 บาท/เดือน ส่งทั่วกรุงเทพและ 56 จังหวัด โทร 061-843-7666",
  alternates: { canonical: "https://www.maidwonderland.com/services/maid" },
  openGraph: {
    title: "บริการแม่บ้านทั่วไป | แม่บ้านดีดี เซอร์วิส",
    description: "บริการจัดหาแม่บ้านทั่วไป ทำความสะอาดบ้าน ซักรีด ทำอาหาร ราคา 11,000–13,000 บาท/เดือน ส่งทั่วกรุงเทพและ 56 จังหวัด โทร 061-843-7666",
    url: "https://www.maidwonderland.com/services/maid",
    siteName: "แม่บ้านดีดี เซอร์วิส",
    images: [{ url: "/images/bg_header.webp", width: 1920, height: 800, alt: "แม่บ้านดีดี เซอร์วิส" }],
    locale: "th_TH",
    type: "website",
  },
};

export default function MaidServicePage() {
  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>
        <ServicePageContent
          serviceKey="maid"
          imageSrc={IMG.maid}
          imageAlt="แม่บ้านทั่วไป"
          priceRange="11,000 – 13,000"
          workHours="จ.–ส. 08:00–17:00"
          isMonthly={true}
        />
      </main>
      <CloneFooter />
    </>
  );
}
