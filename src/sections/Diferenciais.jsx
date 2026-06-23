import { Icon } from "../components/Icon.jsx";
import CircuitDeco from "../components/CircuitDeco.jsx";
import { DIFERENCIAIS } from "../data/site.js";

// ============================================================
// DIFERENCIAIS
// ============================================================
export default function Diferenciais() {
  return (
    <section className="dif sec-pad" id="diferenciais">
      <CircuitDeco />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="sec-head reveal" style={{ maxWidth: 720 }}>
          <span className="kicker">Por que a Ultra Portões</span>
          <h2 className="head">Confiança que se vê em cada detalhe</h2>
          <p>
            Trabalho técnico, transparência no orçamento e suporte que continua
            depois da instalação.
          </p>
        </div>
        <div className="dif-grid">
          {DIFERENCIAIS.map((d, i) => {
            const Ic = Icon[d.ic];
            return (
              <div
                className={`dif-item reveal d${i % 3}`.replace("d0", "")}
                key={i}
              >
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <div className="ic">
                  <Ic />
                </div>
                <h3>{d.t}</h3>
                <p>{d.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
