import Icon from "./Icon";

export default function CardGrid({ items, cols = "lg:grid-cols-3" }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
      {items.map((c) => (
        <div key={c.t} className="overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/20">
          {c.img && <img src={c.img} alt={c.t} className="h-52 w-full object-cover" />}
          <div className="p-7">
            {!c.img && <Icon paths={c.p} />}
            <h3 className="mb-1.5 mt-3.5 text-lg font-semibold">{c.t}</h3>
            <p className="text-[.95rem]">{c.d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
