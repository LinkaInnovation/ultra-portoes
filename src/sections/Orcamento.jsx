import { useState } from "react";
import { Icon } from "../components/Icon.jsx";
import CircuitDeco from "../components/CircuitDeco.jsx";
import { waLink, WA_BASE, SERVICES } from "../data/site.js";

// ============================================================
// ORÇAMENTO
// ============================================================
export default function Orcamento() {
  const [f, setF] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    servico: "",
    mensagem: "",
  });
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));
  const blur = (k) => () => setTouched((p) => ({ ...p, [k]: true }));

  const errs = {
    nome: f.nome.trim().length < 2 ? "Informe seu nome" : "",
    telefone:
      f.telefone.replace(/\D/g, "").length < 10 ? "Telefone inválido" : "",
    servico: !f.servico ? "Selecione um serviço" : "",
  };
  const invalid = (k) => touched[k] && errs[k];

  const submit = (e) => {
    e.preventDefault();
    setTouched({ nome: true, telefone: true, servico: true });
    if (errs.nome || errs.telefone || errs.servico) return;
    const msg = `Olá, gostaria de solicitar um orçamento.

• Nome: ${f.nome}
• Telefone: ${f.telefone}${f.endereco ? `\n• Endereço: ${f.endereco}` : ""}
• Serviço: ${f.servico}${f.mensagem ? `\n• Mensagem: ${f.mensagem}` : ""}`;
    window.open(waLink(msg), "_blank", "noopener");
    setSent(true);
  };

  return (
    <section className="orc sec-pad" id="orcamento">
      <CircuitDeco />
      <div className="wrap orc-grid" style={{ position: "relative", zIndex: 2 }}>
        <div className="orc-left reveal">
          <span className="kicker">Orçamento sem compromisso</span>
          <h2 style={{ marginTop: 18 }}>Solicite seu orçamento</h2>
          <p>
            Conte o que você precisa e nossa equipe retorna com uma proposta
            clara, rápida e sem taxas escondidas.
          </p>
          <ul className="perks">
            <li>
              <Icon.checkCircle /> Resposta no mesmo dia útil
            </li>
            <li>
              <Icon.checkCircle /> Avaliação técnica gratuita
            </li>
            <li>
              <Icon.checkCircle /> Garantia formal em todos os serviços
            </li>
          </ul>
          <div className="wa-inline">
            <a className="btn wa lg" href={WA_BASE} target="_blank" rel="noopener">
              <Icon.whatsapp className="ic" /> Falar agora no WhatsApp
            </a>
            <span className="or">ou preencha o formulário →</span>
          </div>
        </div>

        <div className="form-card reveal d1">
          {sent ? (
            <div className="form-success">
              <div className="ok">
                <Icon.checkCircle style={{ width: 34, height: 34 }} />
              </div>
              <h3>Pedido enviado!</h3>
              <p>
                Abrimos o WhatsApp com seus dados. É só enviar a mensagem que já
                vamos te responder.
              </p>
              <button
                className="btn"
                onClick={() => {
                  setSent(false);
                  setF({
                    nome: "",
                    telefone: "",
                    endereco: "",
                    servico: "",
                    mensagem: "",
                  });
                  setTouched({});
                }}
              >
                Novo orçamento
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h3>Conte sobre seu projeto</h3>
              <p className="fc-sub">Leva menos de 1 minuto.</p>
              <div className={`field ${invalid("nome") ? "invalid" : ""}`}>
                <label>
                  Nome <span className="req">*</span>
                </label>
                <input
                  value={f.nome}
                  onChange={set("nome")}
                  onBlur={blur("nome")}
                  placeholder="Seu nome completo"
                />
                <div className="err">{errs.nome}</div>
              </div>
              <div className="field row2">
                <div
                  className={`field ${invalid("telefone") ? "invalid" : ""}`}
                  style={{ margin: 0 }}
                >
                  <label>
                    Telefone <span className="req">*</span>
                  </label>
                  <input
                    value={f.telefone}
                    onChange={set("telefone")}
                    onBlur={blur("telefone")}
                    placeholder="(11) 90000-0000"
                    inputMode="tel"
                  />
                  <div className="err">{errs.telefone}</div>
                </div>
                <div
                  className={`field ${invalid("servico") ? "invalid" : ""}`}
                  style={{ margin: 0 }}
                >
                  <label>
                    Tipo de serviço <span className="req">*</span>
                  </label>
                  <select
                    value={f.servico}
                    onChange={set("servico")}
                    onBlur={blur("servico")}
                  >
                    <option value="">Selecione...</option>
                    {SERVICES.map((s) => (
                      <option key={s.t} value={s.t}>
                        {s.t}
                      </option>
                    ))}
                    <option value="Outro">Outro</option>
                  </select>
                  <div className="err">{errs.servico}</div>
                </div>
              </div>
              <div className="field">
                <label>Endereço</label>
                <input
                  value={f.endereco}
                  onChange={set("endereco")}
                  placeholder="Bairro / cidade (opcional)"
                />
              </div>
              <div className="field">
                <label>Mensagem</label>
                <textarea
                  value={f.mensagem}
                  onChange={set("mensagem")}
                  placeholder="Descreva o portão, a medida aproximada ou o problema..."
                ></textarea>
              </div>
              <button type="submit" className="btn lg">
                Enviar pelo WhatsApp <Icon.whatsapp className="ic" />
              </button>
              <p className="fineprint">
                Ao enviar, você abre uma conversa no WhatsApp com os dados
                preenchidos.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
