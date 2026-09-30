"use client";
import { useState } from "react";
import Image from "next/image";

interface Props {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YoutubeEmbed({ videoId, title = "YouTube video", className = "" }: Props) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=1`}
        title={title}
        width="100%"
        height="100%"
        className={`absolute inset-0 w-full h-full border-0 ${className}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="absolute inset-0 w-full h-full group"
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
      aria-label={`เล่นวิดีโอ: ${title}`}
    >
      {/* Thumbnail */}
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        style={{ objectFit: "cover" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200"
          style={{ background: "rgba(255,0,0,0.92)" }}
        >
          <svg viewBox="0 0 24 24" fill="white" width="32" height="32" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
