import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import GalleryPageContent from "@/components/GalleryPageContent";

export const metadata = {
  title: "รูปกิจกรรม | แม่บ้านดีดี เซอร์วิส",
  description: "ชมภาพกิจกรรม บรรยากาศการทำงาน และทีมงานแม่บ้านดีดี เซอร์วิส ผู้ให้บริการจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ มากกว่า 20 ปี 95,000+ รีวิว",
  alternates: { canonical: "https://www.maidwonderland.com/gallery" },
  openGraph: {
    title: "รูปกิจกรรม | แม่บ้านดีดี เซอร์วิส",
    description: "ชมภาพกิจกรรม บรรยากาศการทำงาน และทีมงานแม่บ้านดีดี เซอร์วิส ผู้ให้บริการจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ มากกว่า 20 ปี 95,000+ รีวิว",
    url: "https://www.maidwonderland.com/gallery",
    siteName: "แม่บ้านดีดี เซอร์วิส",
    images: [{ url: "/images/bg_header.webp", width: 1920, height: 800, alt: "แม่บ้านดีดี เซอร์วิส" }],
    locale: "th_TH",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>
        <GalleryPageContent />
      </main>
      <CloneFooter />
    </>
  );
}
