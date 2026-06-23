// ---- Logo with real image ----
export default function Logo({ onClick }) {
  return (
    <div className="logo" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src="/images/logo.png" alt="Ultra Portões Automáticos" />
    </div>
  );
}
