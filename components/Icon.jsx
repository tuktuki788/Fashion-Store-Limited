export default function Icon({ paths, size = 48 }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} fill="none" stroke="#009FF0" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      {paths.map((d) => <path key={d} d={d} />)}
    </svg>
  );
}
