import type { Metadata } from "next";
import _Page, { generateMetadata as _gm } from "../../[service]/[slug]/page";

const SERVICE = "elder";
const KEYWORD = "ผู้ดูแลผู้สูงอายุ";
const LOCATIONS = ["กรุงเทพ","ลาดพร้าว","สุขุมวิท","บางนา","ทองหล่อ","นนทบุรี","ปทุมธานี","สมุทรปราการ","รามคำแหง","บางกะปิ","มีนบุรี","ลาดกระบัง"];

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: KEYWORD + loc }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return _gm({ params: Promise.resolve({ service: SERVICE, slug }) });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return _Page({ params: Promise.resolve({ service: SERVICE, slug }) });
}
