import { useEffect } from "react";
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakColor,
  TweakSelect,
} from "./components/TweaksPanel.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Fab from "./components/Fab.jsx";
import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.jsx";
import Diferenciais from "./sections/Diferenciais.jsx";
import Sobre from "./sections/Sobre.jsx";
import Projetos from "./sections/Projetos.jsx";
import Depoimentos from "./sections/Depoimentos.jsx";
import Cobertura from "./sections/Cobertura.jsx";
import Orcamento from "./sections/Orcamento.jsx";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  hero: "escuro",
  accent: ["#0094E8", "#006FC2"],
  headFont: "Bebas Neue",
} /*EDITMODE-END*/;

function useReveal(dep) {
  useEffect(() => {
    const els = [...document.querySelectorAll(".reveal:not(.in)")];
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [dep]);
}

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply tweaks to the document
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.hero = t.hero;
    const [a, a2] = Array.isArray(t.accent) ? t.accent : [t.accent, t.accent];
    root.style.setProperty("--accent", a);
    root.style.setProperty("--accent-2", a2 || a);
    root.style.setProperty("--head", `"${t.headFont}", "Bebas Neue", Impact, sans-serif`);
  }, [t.hero, t.accent, t.headFont]);

  useReveal(t.hero);
  // scroll to top when hero layout changes so the user sees the new hero
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [t.hero]);

  return (
    <>
      <Nav variant={t.hero} />
      <main>
        <Hero variant={t.hero} />
        <Services />
        <Diferenciais />
        <Sobre />
        <Projetos />
        <Depoimentos />
        <Cobertura />
        <Orcamento />
      </main>
      <Footer />
      <Fab />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero" />
        <TweakRadio
          label="Layout"
          value={t.hero}
          options={[
            { value: "escuro", label: "Escuro" },
            { value: "split", label: "Split" },
            { value: "claro", label: "Claro" },
          ]}
          onChange={(v) => setTweak("hero", v)}
        />
        <TweakSection label="Marca" />
        <TweakColor
          label="Cor de destaque"
          value={t.accent}
          options={[
            ["#0094E8", "#006FC2"],
            ["#006FC2", "#00538f"],
            ["#1B9AF0", "#0094E8"],
            ["#0A0A0A", "#2b3036"],
          ]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSelect
          label="Fonte dos títulos"
          value={t.headFont}
          options={["Bebas Neue", "Oswald", "Anton", "Archivo Black"]}
          onChange={(v) => setTweak("headFont", v)}
        />
      </TweaksPanel>
    </>
  );
}
