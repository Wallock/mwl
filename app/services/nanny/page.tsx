import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import ServicePageContent from "@/components/ServicePageContent";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "บริการพี่เลี้ยงเด็ก | แม่บ้านดีดี เซอร์วิส",
  description: "บริการจัดหาพี่เลี้ยงเด็กคุณภาพ ผ่านการตรวจประวัติ ตรวจโรค มีใบอนุญาต ราคา 12,000–15,000 บาท/เดือน โทร 061-843-7666",
  alternates: { canonical: "https://www.maidwonderland.com/services/nanny" },
  openGraph: {
    title: "บริการพี่เลี้ยงเด็ก | แม่บ้านดีดี เซอร์วิส",
    description: "บริการจัดหาพี่เลี้ยงเด็กคุณภาพ ผ่านการตรวจประวัติ ตรวจโรค มีใบอนุญาต ราคา 12,000–15,000 บาท/เดือน โทร 061-843-7666",
    url: "https://www.maidwonderland.com/services/nanny",
    siteName: "แม่บ้านดีดี เซอร์วิส",
    images: [{ url: "/images/bg_header.webp", width: 1920, height: 800, alt: "แม่บ้านดีดี เซอร์วิส" }],
    locale: "th_TH",
    type: "website",
  },
};

export default function NannyServicePage() {
  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>
        <ServicePageContent
          serviceKey="nanny"
          imageSrc={IMG.nanny}
          imageAlt="พี่เลี้ยงเด็ก"
          priceRange="12,000 – 15,000"
          workHours="จ.–ส. 08:00–17:00"
          isMonthly={true}
        />
      </main>
      <CloneFooter />
    </>
  );
}
