import { createFileRoute } from "@tanstack/react-router";
import office from "@/assets/office.jpg";
import { useLang } from "@/lib/i18n";
import { CtaBand, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "За нас | Адвокат Кристина Сакалиева" },
      { name: "description", content: "Адвокатска канцеларија посветена на стручна, сигурна и етичка правна помош за секој клиент." },
      { property: "og:title", content: "За нас — Адвокат Кристина Сакалиева" },
      { property: "og:description", content: "Професионализам, индивидуален пристап и интегритет." },
    ],
  }),
  component: About,
});

function About() {
  const { d } = useLang();
  return (
    <>
      <PageHero title={d.aboutTitle} />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <img src={office} alt={d.name} loading="lazy" width={1600} height={1008} className="rounded-sm border border-border" />
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          {d.about.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
