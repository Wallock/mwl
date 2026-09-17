import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "แม่บ้านดีดี เซอร์วิส | บริการจัดหาแม่บ้านคุณภาพ",
  description:
    "หจก.จัดหางานแม่บ้านดีดี เซอร์วิส บริการจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ ตรวจสุขภาพ 5 โรค ตรวจประวัติอาชญากรรม มีใบอนุญาตถูกต้อง 95,000+ รีวิว",
  keywords: "แม่บ้าน, จัดหาแม่บ้าน, พี่เลี้ยงเด็ก, ผู้ดูแลผู้สูงอายุ, แม่บ้านดีดี",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        {/* LCP hero image — discoverable immediately, high priority */}
        <link
          rel="preload"
          as="image"
          href="/images/bg_header.png"
          fetchPriority="high"
        />

        {/* Google Fonts — crossOrigin fixes third-party cookie blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* display=swap: text visible immediately with fallback font while loading */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Anuphan:wght@100..700&family=Google+Sans:ital,opsz,wght,GRAD@0,17..18,400..700,-50..200;1,17..18,400..700,-50..200&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anuphan:wght@100..700&family=Google+Sans:ital,opsz,wght,GRAD@0,17..18,400..700,-50..200;1,17..18,400..700,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
