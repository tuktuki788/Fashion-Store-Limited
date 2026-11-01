"use client";
import { useState } from "react";

const field = "mb-3.5 w-full rounded-[10px] border-[1.5px] border-line bg-white px-4 py-3 text-black outline-none focus:border-brand";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from website - ${f.name}`);
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.email}`);
    window.location.href = `mailto:info@fashionstorebd.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit}>
      <input className={field} placeholder="Fashonstore" value={f.name} onChange={set("name")} required />
      <input className={field} type="email" placeholder="Your email" value={f.email} onChange={set("email")} required />
      <textarea className={field} rows={5} placeholder="Tell us about your requirements" value={f.message} onChange={set("message")} required />
      <button className="rounded-full border-2 border-brand bg-brand px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-brand">Send message</button>
    </form>
  );
}
