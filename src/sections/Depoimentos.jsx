import { Icon } from "../components/Icon.jsx";
import { DEPOIMENTOS } from "../data/site.js";

// ============================================================
// DEPOIMENTOS
// ============================================================
export default function Depoimentos() {
  return (
    <section className="depo sec-pad" id="depoimentos">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="kicker center">Depoimentos</span>
          <h2 className="head">O que dizem nossos clientes</h2>
          <p>Avaliações reais de quem confiou na Ultra Portões.</p>
        </div>
        <div className="depo-grid reveal">
          {DEPOIMENTOS.map((d, i) => (
            <article className="depo-card" key={i}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon.star key={s} />
                  ))}
                </div>
                <Icon.google className="g" />
              </div>
              <p className="quote">“{d.q}”</p>
              <div className="who">
                {d.av ? (
                  <img
                    src={d.av}
                    alt={d.n}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      objectFit: "cover",
                      flex: "0 0 auto",
                    }}
                  />
                ) : (
                  <div className="av">
                    {d.n
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
                <div>
                  <b>{d.n}</b>
                  <span>{d.l}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="depo-note">
          Avaliações reais do Google ·{" "}
          <a
            href="https://g.page/r/ultraportoes"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--accent)" }}
          >
            Ver todas no Google
          </a>
        </p>
      </div>
    </section>
  );
}
