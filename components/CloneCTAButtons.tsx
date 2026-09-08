"use client";
import { IMG } from "@/lib/images";

export default function CloneCTAButtons() {
  return (
    <div className="grid grid-cols-3">
      <a href="tel:0618437666" className="block relative group overflow-hidden">
        <img
          src={IMG.btnCall}
          alt="โทรหาเรา 061-843-7666"
          className="w-full block transition-opacity duration-200 group-hover:opacity-90"
        />
      </a>
      <a href="tel:0618437666" className="block relative group overflow-hidden">
        <img
          src={IMG.btnUrgent}
          alt="โทรด่วน ไม่รอคิว"
          className="w-full block transition-opacity duration-200 group-hover:opacity-90"
        />
      </a>
      <a
        href="https://line.me/ti/p/~@dede1721"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group overflow-hidden"
      >
        <img
          src={IMG.btnLine}
          alt="LINE @dede1721"
          className="w-full block transition-opacity duration-200 group-hover:opacity-90"
        />
      </a>
    </div>
  );
}
