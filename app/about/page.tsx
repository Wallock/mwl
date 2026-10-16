import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata = {
  title: "เกี่ยวกับเรา | แม่บ้านดีดี เซอร์วิส",
  description: "หจก.จัดหางานแม่บ้านดีดี เซอร์วิส ผู้นำจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ มีใบอนุญาตถูกต้อง ประสบการณ์กว่า 8 ปี รีวิวกว่า 1,700 รีวิว โทร 061-843-7666",
  alternates: { canonical: "https://www.maidwonderland.com/about" },
  openGraph: {
    title: "เกี่ยวกับเรา | แม่บ้านดีดี เซอร์วิส",
    description: "หจก.จัดหางานแม่บ้านดีดี เซอร์วิส ผู้นำจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ มีใบอนุญาตถูกต้อง ประสบการณ์กว่า 8 ปี รีวิวกว่า 1,700 รีวิว โทร 061-843-7666",
    url: "https://www.maidwonderland.com/about",
    siteName: "แม่บ้านดีดี เซอร์วิส",
    images: [{ url: "/images/bg_header.webp", width: 1920, height: 800, alt: "แม่บ้านดีดี เซอร์วิส" }],
    locale: "th_TH",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>
        <AboutPageContent />
      </main>
      <CloneFooter />
    </>
  );
}
