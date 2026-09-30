
export default function CloneReviews() {
  return (
    <section className="relative bg-[#FBF8F2] overflow-hidden py-12 lg:py-16">

      <div data-blob
        className="pointer-events-none absolute -top-20 -right-20 w-[460px] h-[460px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)", filter: "blur(120px)" }}
      />
      <div data-blob
        className="pointer-events-none absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(212,87,110,0.10) 0%, transparent 70%)", filter: "blur(120px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">

        {/* Elfsight Google Reviews widget */}
        <div className="elfsight-app-4768500b-991c-41c0-98b8-c7de5620a9dc" />
      </div>
    </section>
  );
}
