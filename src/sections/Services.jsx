import { Icon } from "../components/Icon.jsx";
import { SERVICES } from "../data/site.js";

// ============================================================
// SERVICES
// ============================================================
export default function Services() {
  return (
    <section className="services sec-pad" id="servicos">
      <div className="wrap flex-col" style={{ position: "relative", zIndex: 2 }}>
        <div className="svc-head-row">
          <div className="svc-body">
            <div className="svc-head-text">
              <div className="sec-head reveal">
                <span className="kicker">O que fazemos</span>
                <h2 className="head">
                  Soluções completas em portões automáticos
                </h2>
                <p>
                  Do projeto à manutenção, cuidamos de cada etapa com técnica,
                  peças originais e acabamento profissional.
                </p>
              </div>
            </div>
            <div className="svc-head-image reveal" aria-hidden="true"></div>
          </div>
        </div>

        <div className="svc-grid reveal">
          {SERVICES.map((s, i) => {
            const Ic = Icon[s.ic];
            return (
              <article className="svc" key={i}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div className="ic-wrap">
                  <Ic />
                </div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="arr">
                  Saiba mais <Icon.arrowRight style={{ width: 15, height: 15 }} />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
