import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "บทความ | แม่บ้านดีดี เซอร์วิส",
  description: "บทความและคู่มือน่ารู้เกี่ยวกับการจ้างแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ และดูแลบ้าน จากผู้เชี่ยวชาญแม่บ้านดีดี เซอร์วิส กว่า 20 ปี",
  alternates: { canonical: "https://www.maidwonderland.com/articles" },
  openGraph: {
    title: "บทความ | แม่บ้านดีดี เซอร์วิส",
    description: "บทความและคู่มือน่ารู้เกี่ยวกับการจ้างแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ และดูแลบ้าน จากผู้เชี่ยวชาญแม่บ้านดีดี เซอร์วิส กว่า 20 ปี",
    url: "https://www.maidwonderland.com/articles",
    siteName: "แม่บ้านดีดี เซอร์วิส",
    images: [{ url: "/images/bg_header.webp", width: 1920, height: 800, alt: "แม่บ้านดีดี เซอร์วิส" }],
    locale: "th_TH",
    type: "website",
  },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
