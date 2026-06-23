// ---- striped captioned placeholder ----
export default function Placeholder({ label, dark, corners = true, style }) {
  return (
    <div className={dark ? "ph dark" : "ph"} style={style}>
      {corners && (
        <>
          <i className="corner tl" />
          <i className="corner tr" />
          <i className="corner br" />
        </>
      )}
      <span className="ph-tag">{label}</span>
    </div>
  );
}
