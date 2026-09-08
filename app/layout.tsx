import type { Metadata } from "next";
import { Fraunces, Sarabun } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  variable: "--font-sarabun",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

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
    <html lang="th" className={`${fraunces.variable} ${sarabun.variable}`}>
      <body>{children}</body>
    </html>
  );
}
