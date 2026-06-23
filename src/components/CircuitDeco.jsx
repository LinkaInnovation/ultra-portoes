// ---- circuit line decoration ----
export default function CircuitDeco({ light }) {
  const c = light ? "rgba(0,148,232,.5)" : "rgba(0,148,232,.55)";
  const c2 = light ? "rgba(10,10,10,.06)" : "rgba(255,255,255,.06)";
  return (
    <svg
      className="circuit"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <g stroke={c2} strokeWidth="1">
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={100 * i + 60}
            x2="1200"
            y2={100 * i + 60}
          />
        ))}
      </g>
      <g fill="none" stroke={c} strokeWidth="1.4">
        <path className="ln" d="M820 0 V120 H980 V260 H1120" />
        <path className="ln b" d="M1080 80 H920 V200 H760 V360 H1010" />
        <path className="ln c" d="M900 800 V640 H1060 V520 H1200" />
      </g>
      <g fill={c}>
        {[
          [980, 120],
          [1120, 260],
          [760, 200],
          [1010, 360],
          [1060, 520],
          [920, 200],
        ].map(([x, y], i) => (
          <circle
            key={i}
            className="nd"
            cx={x}
            cy={y}
            r="4"
            style={{ animationDelay: `${1 + i * 0.18}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
