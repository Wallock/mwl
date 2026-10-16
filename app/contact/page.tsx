import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata = {
  title: "ติดต่อเรา | แม่บ้านดีดี เซอร์วิส",
  description: "ติดต่อแม่บ้านดีดี เซอร์วิส จัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ โทร 061-843-7666 LINE @dede1721 เปิดให้บริการทุกวัน 08:00–20:00 น.",
  alternates: { canonical: "https://www.maidwonderland.com/contact" },
  openGraph: {
    title: "ติดต่อเรา | แม่บ้านดีดี เซอร์วิส",
    description: "ติดต่อแม่บ้านดีดี เซอร์วิส จัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ โทร 061-843-7666 LINE @dede1721 เปิดให้บริการทุกวัน 08:00–20:00 น.",
    url: "https://www.maidwonderland.com/contact",
    siteName: "แม่บ้านดีดี เซอร์วิส",
    images: [{ url: "/images/bg_header.webp", width: 1920, height: 800, alt: "แม่บ้านดีดี เซอร์วิส" }],
    locale: "th_TH",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>
        <ContactPageContent />
      </main>
      <CloneFooter />
    </>
  );
}
