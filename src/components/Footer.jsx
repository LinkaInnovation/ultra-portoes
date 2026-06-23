import { Icon } from "./Icon.jsx";
import Logo from "./Logo.jsx";
import {
  waLink,
  WA_BASE,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS,
  INSTAGRAM,
  FACEBOOK,
  SERVICES,
  NAV_LINKS,
} from "../data/site.js";

// ============================================================
// FOOTER
// ============================================================
export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <Logo />
          <p className="foot-about">
            Instalação, automação e manutenção de portões automáticos com
            segurança, tecnologia e garantia.
          </p>
          <div className="foot-social">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <Icon.instagram />
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <Icon.facebook />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
            >
              <Icon.whatsapp />
            </a>
          </div>
        </div>
        <div>
          <h4>Serviços</h4>
          <ul>
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.t}>
                <a href="#servicos" onClick={(e) => go(e, "#servicos")}>
                  {s.t}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => go(e, l.href)}>
                  {l.t}
                </a>
              </li>
            ))}
            <li>
              <a href="#orcamento" onClick={(e) => go(e, "#orcamento")}>
                Orçamento
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul className="foot-contact">
            <li>
              <Icon.phone />
              <a href="tel:+5511940403153">{PHONE_DISPLAY}</a>
            </li>
            <li>
              <Icon.whatsapp />
              <a href={WA_BASE} target="_blank" rel="noopener">
                WhatsApp direto
              </a>
            </li>
            <li>
              <Icon.mail />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <Icon.mapPin />
              <span>{ADDRESS}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-bot">
        <span>
          © {new Date().getFullYear()} Ultra Portões Automáticos. Todos os
          direitos reservados.
        </span>
        <span>Vila Butantã · São Paulo / SP · @ultraportoes</span>
      </div>
    </footer>
  );
}
