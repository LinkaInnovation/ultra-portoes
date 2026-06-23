import { Icon } from "./Icon.jsx";
import { WA_BASE } from "../data/site.js";

// ============================================================
// FLOATING WHATSAPP
// ============================================================
export default function Fab() {
  return (
    <div className="fab">
      <a
        className="fab-btn"
        href={WA_BASE}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
      >
        <Icon.whatsapp width={34} height={34} style={{ color: "#fff" }} />
      </a>
      <div className="fab-bubble">
        <b>Ultra Portões</b>
        Olá! 👋 Gostaria de solicitar um orçamento?
      </div>
    </div>
  );
}
