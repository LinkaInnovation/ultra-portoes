import { useState, useEffect } from "react";
import { Icon } from "./Icon.jsx";
import Logo from "./Logo.jsx";
import { PHONE_DISPLAY, NAV_LINKS } from "../data/site.js";

// ============================================================
// NAV
// ============================================================
export default function Nav({ variant }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  // dark text-on-transparent only over the escuro hero, at top
  const onDark = variant === "escuro" && !scrolled;
  // split/escuro-scrolled use the solid bar; claro & split stay light/solid
  const solid = scrolled || variant === "split";
  const cls = ["nav", solid && "scrolled", onDark && "on-dark"]
    .filter(Boolean)
    .join(" ");
  const go = (e, href) => {
    e.preventDefault();
    setMenu(false);
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <header className={cls}>
        <div className="nav-inner">
          <Logo onClick={top} />
          <nav className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
                {l.t}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a className="nav-phone" href={`tel:+${"5511940403153"}`}>
              <Icon.phone />
              {PHONE_DISPLAY}
            </a>
            <button className="nav-btn" onClick={(e) => go(e, "#orcamento")}>
              Solicitar Orçamento
            </button>
            <button
              className="nav-burger"
              aria-label="Menu"
              onClick={() => setMenu((m) => !m)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={menu ? "m-menu open" : "m-menu"}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
            {l.t}
          </a>
        ))}
        <a href={`tel:+5511940403153`}>{PHONE_DISPLAY}</a>
        <button className="btn" onClick={(e) => go(e, "#orcamento")}>
          Solicitar Orçamento <Icon.arrowRight className="ic" />
        </button>
      </div>
    </>
  );
}
