import { IMG } from "@/lib/images";

export default function CloneHero() {
  return (
    <div style={{ lineHeight: 0 }}>
      <img
        src={IMG.hero}
        alt="แม่บ้านดีดี เซอร์วิส"
        style={{ width: "100%", display: "block", height: "auto" }}
      />
    </div>
  );
}
