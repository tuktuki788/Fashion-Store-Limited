import Icon from "./Icon";

export default function CardGrid({ items, cols = "lg:grid-cols-3" }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
      {items.map((c) => (
        <div key={c.t} className="rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/20">
          <Icon paths={c.p} />
          <h3 className="mb-1.5 mt-3.5 text-lg font-semibold">{c.t}</h3>
          <p className="text-[.95rem]">{c.d}</p>
        </div>
      ))}
    </div>
  );
}
