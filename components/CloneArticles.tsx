import { IMG } from "@/lib/images";

const BASE = "https://www.maidwonderland.com";

const articles = [
  { title: "จัดหาแม่บ้าน หน้าตาสะอาดสะอ้าน ทำงานเก่ง ตอบโจทย์ทุกบ้าน",  date: "4 ก.ย.",  img: IMG.art.img1 },
  { title: "เลือกแม่บ้านหน้าตาดีสะอาดตา หรือหน้าตาธรรมดาแต่ทำงานเก่ง",   date: "4 ก.ย.",  img: IMG.art.img2 },
  { title: "แม่บ้านหน้าตาดีแต่ทำงานไม่ได้ ปัญหาที่นายจ้างไม่ควรมองข้าม", date: "3 ก.ย.",  img: IMG.art.img3 },
  { title: "แม่บ้านหน้าตาดีแต่นิสัยแย่ รับมืออย่างไรไม่ให้บ้านวุ่น",     date: "3 ก.ย.",  img: IMG.art.img4 },
  { title: "พี่เลี้ยงกับเด็กวัยรุ่นตอนต้น ป.6-ม.1 ปรับตัวอย่างไร",       date: "2 ก.ย.",  img: IMG.art.img5 },
  { title: "แม่บ้านมืออาชีพดูแลสุขภาพตัวเอง ไม่ให้บาดเจ็บจากงาน",        date: "1 ก.ย.",  img: IMG.art.img6 },
  { title: "ทำความสะอาดบ้านใหม่ก่อนเข้าอยู่ ต้องเช็คจุดไหนบ้าง",          date: "1 ก.ย.",  img: IMG.art.img7 },
  { title: "ทำไมครอบครัวยุคใหม่นิยมหาแม่บ้านมากขึ้น",                     date: "31 ส.ค.", img: IMG.art.img8 },
];

export default function CloneArticles() {
  return (
    <section className="bg-cream py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-5">

        <div className="text-center mb-8 lg:mb-12">
          <span className="sec-badge">บทความ</span>
          <h2 className="text-3xl lg:text-[2.5rem] font-black text-ink mt-3 mb-2">
            ข้อมูล{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">น่ารู้</span>
          </h2>
        </div>

        {/* 4 visible on all sizes, last 4 hidden on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {articles.map((a, i) => (
            <a
              key={i}
              href={`${BASE}/article/`}
              target="_blank"
              rel="noopener noreferrer"
              className={`art-card${i >= 4 ? " hidden sm:block" : ""}`}
            >
              <div className="overflow-hidden">
                <img src={a.img} alt={a.title} className="art-img" />
              </div>
              <div className="p-3 lg:p-4">
                <span className="inline-flex items-center gap-1 bg-gold/10 text-gold-dark border border-gold/25 rounded-full px-2.5 py-0.5 text-[10px] font-bold mb-2">
                  ✦ {a.date}
                </span>
                <h4 className="text-xs lg:text-[13px] font-bold text-ink leading-[1.5] line-clamp-3">{a.title}</h4>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href={`${BASE}/article/`} target="_blank" rel="noopener noreferrer" className="btn-pink">
            ดูบทความทั้งหมด →
          </a>
        </div>
      </div>
    </section>
  );
}
