import Header from "../components/Header";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import ContactForm from "../components/ContactForm";
import Icon from "../components/Icon";
import { stats, products, capability, compliance, contact } from "../lib/data";

const primary = "rounded-full border-2 border-brand bg-brand px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-brand";
const outline = "rounded-full border-2 border-brand px-7 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="relative overflow-hidden bg-white pb-24 pt-20 md:pb-28 md:pt-28">
          <div className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full bg-brand/10" />
          <div className="absolute -bottom-40 right-28 h-80 w-80 rounded-full bg-brand/5" />
          <div className="relative mx-auto w-[92%] max-w-[1160px]">
            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Quality Garments, <span className="text-brand">Made in Bangladesh</span> for the World
            </h1>
            <p className="mb-8 max-w-xl text-lg">
              Fashionstorebd.com is a vertically integrated ready-made garments manufacturer delivering knit, woven and sweater collections to leading global brands.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href="#products" className={primary}>Our products</a>
              <a href="#contact" className={outline}>Request a quote</a>
            </div>
          </div>
        </section>

        <div className="relative z-10 mx-auto -mt-12 grid w-[92%] max-w-[1160px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-line bg-white p-6 text-center shadow-lg shadow-brand/10">
              <strong className="block text-3xl text-brand">{n}</strong>{l}
            </div>
          ))}
        </div>

        <Section id="about" title={<>About <span className="text-brand">our factory</span></>}>
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
            <div>
              <p>We combine modern machinery, skilled people and strict quality control to turn your designs into market-ready garments, on time and at the right price.</p>
              <ul className="mt-5 space-y-2.5">
                {["In-house cutting, sewing, washing, finishing and packing", "Dedicated merchandising and sampling teams", "Inline and final inspection at every stage", "Reliable shipment through Chattogram port"].map((t) => (
                  <li key={t} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-brand">{t}</li>
                ))}
              </ul>
            </div>
            <div className="flex min-h-[300px] flex-col justify-center rounded-3xl border-2 border-brand bg-white p-10">
              <h3 className="mb-2.5 text-2xl font-semibold text-brand">Our promise</h3>
              <p>Quality you can trust, delivery you can plan around, and a partnership built for the long term.</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {["Quality", "On-time", "Ethical"].map((b) => <span key={b} className="rounded-full border-[1.5px] border-brand px-4 py-1 text-sm font-semibold text-brand">{b}</span>)}
              </div>
            </div>
          </div>
        </Section>

        <Section id="products" alt title={<>Our <span className="text-brand">products</span></>} sub="A broad range of apparel for men, women and kids, produced to your specification.">
          <CardGrid items={products} cols="lg:grid-cols-4" />
        </Section>

        <Section id="capability" title={<>Our <span className="text-brand">capability</span></>} sub="Everything under one roof for faster lead times and consistent quality.">
          <CardGrid items={capability} />
        </Section>

        <Section id="compliance" alt title={<>Sustainability &amp; <span className="text-brand">compliance</span></>} sub="We believe responsible manufacturing is the only way forward.">
          <CardGrid items={compliance} />
        </Section>

        <Section id="contact" title={<>Get in <span className="text-brand">touch</span></>} sub="Tell us about your next collection and we will reply within one working day.">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              {contact.map((c) => (
                <div key={c.t} className="mb-5 flex items-start gap-4">
                  <Icon paths={c.p} size={34} />
                  <div><strong>{c.t}</strong><br />{c.v}</div>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <footer className="border-t-[3px] border-brand bg-white py-7 text-center text-sm">
        © {new Date().getFullYear()} Fashionstorebd.com. All rights reserved.
      </footer>
    </>
  );
}
