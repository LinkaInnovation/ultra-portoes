import { Icon } from "../components/Icon.jsx";

// ============================================================
// SOBRE
// ============================================================
export default function Sobre() {
  const pts = [
    "Soluções seguras e duráveis",
    "Atendimento transparente",
    "Suporte técnico confiável",
    "Praticidade e tranquilidade",
  ];
  return (
    <section className="sobre sec-pad" id="sobre">
      <div className="wrap sobre-grid">
        <div className="sobre-art reveal">
          <img
            src="/images/sobre-foto.jpeg"
            alt="Portão automático moderno instalado pela Ultra Portões"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 12,
              objectPosition: "center 40%",
            }}
          />
          <div className="tag-float">
            <b>+5</b>
            <span>anos entregando segurança e qualidade</span>
          </div>
        </div>
        <div className="sobre-txt reveal d1">
          <span className="kicker">Quem somos</span>
          <h2
            className="head"
            style={{
              fontSize: "clamp(34px,4.4vw,62px)",
              margin: "16px 0 22px",
            }}
          >
            Segurança e tecnologia para o seu acesso
          </h2>
          <p>
            A <strong>Ultra Portões Automáticos</strong> nasceu com o propósito
            de oferecer soluções seguras, modernas e duráveis para residências,
            empresas e condomínios. Com experiência no mercado e uma equipe
            especializada, buscamos entregar instalações de alta qualidade,
            atendimento transparente e suporte técnico confiável.
          </p>
          <p style={{ marginTop: 14 }}>
            Nosso compromisso é garantir praticidade, segurança e tranquilidade
            para nossos clientes em cada projeto realizado.
          </p>
          <ul className="sobre-list">
            {pts.map((p, i) => (
              <li key={i}>
                <Icon.checkCircle />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
