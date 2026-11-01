"use client";
import { useState } from "react";
import { nav } from "../lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-[68px] w-[92%] max-w-[1160px] items-center justify-between">
        <a href="#home" className="text-xl font-bold text-brand">Fashion<span className="text-black">storebd</span>.com</a>
        <button className="p-1.5 md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {[0, 1, 2].map((i) => <span key={i} className="my-1 block h-[3px] w-[26px] rounded bg-brand" />)}
        </button>
        <nav className={`${open ? "block" : "hidden"} absolute left-0 right-0 top-[68px] border-b border-line bg-white md:static md:block md:border-0`}>
          <ul className="flex flex-col text-[.95rem] font-medium md:flex-row md:gap-7">
            {nav.map(([label, href]) => (
              <li key={href}><a href={href} onClick={() => setOpen(false)} className="block px-[4%] py-3.5 hover:text-brand md:p-0">{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
