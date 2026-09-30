import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const anuphan = localFont({
  src: [
    {
      path: "../public/fonts/anuphan-thai.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/anuphan-latin.woff2",
      style: "normal",
    },
  ],
  variable: "--font-anuphan",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "แม่บ้านดีดี เซอร์วิส | บริการจัดหาแม่บ้านคุณภาพ",
  description:
    "หจก.จัดหางานแม่บ้านดีดี เซอร์วิส บริการจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ ตรวจสุขภาพ 5 โรค ตรวจประวัติอาชญากรรม มีใบอนุญาตถูกต้อง 95,000+ รีวิว",
  keywords: "แม่บ้าน, จัดหาแม่บ้าน, พี่เลี้ยงเด็ก, ผู้ดูแลผู้สูงอายุ, แม่บ้านดีดี",
  metadataBase: new URL("https://www.maidwonderland.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" data-scroll-behavior="smooth" className={anuphan.variable}>
      <body>
        {children}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://js.wb.in.th/tracker/tBmPI9UA5yfObxACd0O6gLG2DW2aFCjFrUJDgy9R119yTy5dlRafaOr5Bill8QAo" width="1" height="1" style={{display:"none"}} alt="" />
      </body>
    </html>
  );
}
