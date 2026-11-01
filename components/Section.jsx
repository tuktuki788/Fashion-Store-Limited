export default function Section({ id, title, sub, alt, children }) {
  return (
    <section id={id} className={`py-14 md:py-20 ${alt ? "bg-alt" : "bg-white"}`}>
      <div className="mx-auto w-[92%] max-w-[1160px]">
        {title && <h2 className="mb-2 text-[1.6rem] font-semibold leading-tight md:text-4xl">{title}</h2>}
        {sub && <p className="mb-9 max-w-xl">{sub}</p>}
        {children}
      </div>
    </section>
  );
}
