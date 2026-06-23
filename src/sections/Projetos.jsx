import { useState, useMemo } from "react";
import { PROJ_CATS, PROJECTS } from "../data/site.js";

// ============================================================
// PROJETOS
// ============================================================
export default function Projetos() {
  const [cat, setCat] = useState("Todos");
  const shown = useMemo(
    () => (cat === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat)),
    [cat],
  );
  return (
    <section className="proj sec-pad" id="projetos">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">Projetos realizados</span>
          <h2 className="head">Trabalho que fala por nós</h2>
          <p>
            Uma amostra de instalações, automações e reformas entregues para
            clientes da região.
          </p>
        </div>
        <div className="proj-filters reveal">
          {PROJ_CATS.map((c) => (
            <button
              key={c}
              className={c === cat ? "active" : ""}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="proj-grid reveal">
          {shown.map((p, i) => (
            <article
              className="proj-card"
              key={p.t + i}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <img
                src={p.img}
                alt={p.t}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform .5s ease",
                }}
                className="proj-img"
              />
              <div className="meta">
                <span className="cat">{p.cat}</span>
                <b>{p.t}</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
