import { Icon } from "../components/Icon.jsx";
import { ADDRESS, PHONE_DISPLAY, HOODS } from "../data/site.js";

// ============================================================
// COBERTURA
// ============================================================
export default function Cobertura() {
  const lat = -23.57152,
    lon = -46.74397;
  const d = 0.01;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - d},${lat - d * 0.62},${lon + d},${lat + d * 0.62}&layer=mapnik&marker=${lat},${lon}`;
  const gmaps = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
  return (
    <section className="cob sec-pad" id="cobertura">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">Área de atuação</span>
          <h2 className="head">Atendemos toda a região</h2>
          <p>
            Base na Vila Butantã, com atendimento ágil na zona oeste de São
            Paulo e cidades vizinhas.
          </p>
        </div>
        <div className="cob-grid">
          <div className="cob-info reveal">
            <h3 className="head" style={{ fontSize: 28, margin: "0 0 6px" }}>
              Bairros atendidos
            </h3>
            <div className="hood-list">
              {HOODS.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>
            <div className="cob-card">
              <div className="row">
                <Icon.mapPin />
                <div>
                  <b>Endereço</b>
                  <span>{ADDRESS}</span>
                </div>
              </div>
              <div className="row">
                <Icon.phone />
                <div>
                  <b>Telefone / WhatsApp</b>
                  <span>{PHONE_DISPLAY}</span>
                </div>
              </div>
              <div className="row">
                <Icon.clock />
                <div>
                  <b>Horário</b>
                  <span>Seg a Sex · 8h às 18h · Urgências sob consulta</span>
                  <p style={{ margin: "0px 0 0" }}>
                    <span>Sáb · 8h às 12h </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cob-map reveal d1">
            <iframe
              src={mapSrc}
              title="Mapa Ultra Portões"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a className="map-cta" href={gmaps} target="_blank" rel="noopener">
              <Icon.mapPin style={{ width: 16, height: 16 }} /> Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
