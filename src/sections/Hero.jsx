import { Icon } from "../components/Icon.jsx";
import CircuitDeco from "../components/CircuitDeco.jsx";
import { WA_BASE } from "../data/site.js";

// ============================================================
// HERO
// ============================================================
const HeroCopy = ({ stats = true }) => {
  const scroll = () =>
    document
      .querySelector("#orcamento")
      ?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="hero-copy">
      <span className="kicker">Automação · Segurança · Tecnologia</span>
      <h1 className="head" style={{ marginTop: 22 }}>
        Portões automáticos com{" "}
        <span className="accent">segurança, tecnologia e qualidade</span>
      </h1>
      <p className="sub" style={{ marginTop: 24 }}>
        Instalação, manutenção e automação de portões residenciais, comerciais
        e industriais — com equipe especializada e garantia em cada projeto.
      </p>
      <div className="cta-row">
        <button className="btn lg" onClick={scroll}>
          Solicitar Orçamento <Icon.arrowRight className="ic" />
        </button>
        <a className="btn lg wa" href={WA_BASE} target="_blank" rel="noopener">
          <Icon.whatsapp className="ic" /> Falar no WhatsApp
        </a>
      </div>
      {stats && (
        <div className="hero-stats">
          <div className="s">
            <b>+5</b>
            <span>Anos de mercado</span>
          </div>
          <div className="s">
            <b>100%</b>
            <span>Serviços com garantia</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Hero({ variant }) {
  if (variant === "split") {
    return (
      <section className="hero" data-screen-label="Hero (Split)">
        <div
          className="hero-grid wrap"
          style={{ maxWidth: "none", padding: 0 }}
        >
          <div className="hero-left">
            <CircuitDeco />
            <div
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: 560,
                marginLeft: "auto",
                paddingRight: "clamp(0px,2vw,40px)",
              }}
            >
              <HeroCopy />
            </div>
          </div>
          <div className="hero-right">
            <span className="seam" />
            <img
              src="/images/hero-foto.jpg"
              alt="Ultra Portões Automáticos"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>
    );
  }
  const dark = variant === "escuro";
  return (
    <section
      className="hero"
      data-screen-label={`Hero (${dark ? "Escuro" : "Claro"})`}
    >
      {dark && <span className="hero-glow" />}
      <CircuitDeco light={!dark} />
      <div className="hero-grid wrap">
        <HeroCopy />
        <div className="hero-art">
          <img
            src="/images/hero-foto.jpg"
            alt="Ultra Portões Automáticos — sede e portão moderno"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
              borderRadius: 12,
            }}
          />
          <div className="hero-badge">
            <Icon.shieldCheck
              style={{ width: 38, height: 38, color: "var(--accent)" }}
            />
            <div>
              <b>5★</b>
              <span>Clientes satisfeitos na região</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
