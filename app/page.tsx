import CloneNavbar from "@/components/CloneNavbar";
import CloneHero from "@/components/CloneHero";
import CloneCTAButtons from "@/components/CloneCTAButtons";
import CloneTrust from "@/components/CloneTrust";
import CloneAbout from "@/components/CloneAbout";
import CloneClients from "@/components/CloneClients";
import CloneServices from "@/components/CloneServices";
import CloneGallery from "@/components/CloneGallery";
import ClonePackages from "@/components/ClonePackages";
import CloneReviews from "@/components/CloneReviews";
import CloneArticles from "@/components/CloneArticles";
import CloneSEOLinks from "@/components/CloneSEOLinks";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import WaveDivider from "@/components/WaveDivider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "แม่บ้านดีดี เซอร์วิส | บริการจัดหาแม่บ้านคุณภาพ",
  description: "หจก.จัดหางานแม่บ้านดีดี เซอร์วิส บริการจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ ตรวจสุขภาพ 5 โรค ตรวจประวัติอาชญากรรม มีใบอนุญาตถูกต้อง 95,000+ รีวิว",
  alternates: { canonical: "https://www.maidwonderland.com" },
  openGraph: {
    title: "แม่บ้านดีดี เซอร์วิส | บริการจัดหาแม่บ้านคุณภาพ",
    description: "หจก.จัดหางานแม่บ้านดีดี เซอร์วิส บริการจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ ตรวจสุขภาพ 5 โรค ตรวจประวัติอาชญากรรม มีใบอนุญาตถูกต้อง",
    url: "https://www.maidwonderland.com",
    siteName: "แม่บ้านดีดี เซอร์วิส",
    images: [{ url: "/images/bg_header.webp", width: 1920, height: 800, alt: "แม่บ้านดีดี เซอร์วิส" }],
    locale: "th_TH",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "แม่บ้านดีดี เซอร์วิส",
  alternateName: "หจก.จัดหางานแม่บ้านดีดี เซอร์วิส",
  url: "https://www.maidwonderland.com",
  logo: "https://www.maidwonderland.com/images/logo/logo.webp",
  image: "https://www.maidwonderland.com/images/bg_header.webp",
  description: "บริการจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ ตรวจสุขภาพ 5 โรค ตรวจประวัติอาชญากรรม มีใบอนุญาตถูกต้อง",
  telephone: "+66618437666",
  address: {
    "@type": "PostalAddress",
    streetAddress: "206, 208 ถ.เจริญสนิทวงศ์ 82 แขวงบางอ้อ เขตบางพลัด",
    addressLocality: "กรุงเทพมหานคร",
    postalCode: "10700",
    addressCountry: "TH",
  },
  openingHours: "Mo-Su 08:00-20:00",
  priceRange: "฿฿",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "95000",
  },
  sameAs: [
    "https://www.facebook.com/maidwonderland",
    "https://line.me/ti/p/~@dede1721",
  ],
};

async function fetchArticles() {
  try {
    const res = await fetch(
      `${process.env.WORDPRESS_URL ?? "https://www.maidwonderland.com"}/wp-json/wp/v2/posts?page=1&per_page=8&_embed`,
      { cache: "force-cache" }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const articles = await fetchArticles();
  return (
    <>
      {/* LCP preload */}
      <link rel="preload" as="image" href="/images/bg_header.webp" fetchPriority="high" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CloneNavbar />
      <GSAPAnimations />
      <main>
        <CloneHero />

        {/* white */}
        <CloneAbout />
        <WaveDivider bgColor="#ffffff" fillColor="#FAFAF9" />

        {/* #FAFAF9 */}
        <CloneTrust />

        {/* white */}
        <CloneCTAButtons />
                <WaveDivider bgColor="#FAFAF9" fillColor="#ffffff" />
        <CloneClients />

        {/* white → #FBF8F2 */}
        <CloneServices />
        <WaveDivider bgColor="#ffffff" fillColor="#FBF8F2" />

        {/* #FBF8F2 */}
        <CloneGallery />
        <WaveDivider bgColor="#FBF8F2" fillColor="#ffffff" />

        {/* white */}
        <ClonePackages />
        <WaveDivider bgColor="#ffffff" fillColor="#FBF8F2" />

        {/* #FBF8F2 */}
        <CloneReviews />
        <WaveDivider bgColor="#FBF8F2" fillColor="#ffffff" />

        {/* white */}
        <CloneArticles initialPosts={articles} />
        <WaveDivider bgColor="#ffffff" fillColor="#FAFAF9" />

        {/* #FAFAF9 */}
        <CloneSEOLinks />
      </main>
      <CloneFooter />
    </>
  );
}
