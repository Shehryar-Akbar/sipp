"use client";
import { useEffect } from "react";
import SplitType from "split-type";

export default function SplitMenu() {
  useEffect(() => {
    new SplitType(".split-text", { types: "chars" });
  }, []);

  const links = [
    { label: "TikTok", width: 125 },
    { label: "Twitter", width: 200 },
    { label: "Instagram", width: 77 },
    { label: "Facebook", width: 93 },
    { label: "YouTube", width: 92 }
  ];

  return (
    <nav className="flex flex-col gap-2 items-center">
      {links.map((item, i) => (
        <a
          key={i}
          href="#"
          style={{ fontVariationSettings: `"wdth" ${item.width}` }}
          className="
            split-text relative overflow-hidden
            font-black text-2xl uppercase text-[#f4f4ed]!
            tracking-tight leading-[0.8] max-sm:text-lg
            transition-all
          "
          target="_blank"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
