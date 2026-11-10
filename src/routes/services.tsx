import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { CtaBand, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Услуги | Адвокат Кристина Сакалиева" },
      { name: "description", content: "Граѓанско, облигационо, стопанско, корпоративно, кривично, семејно, наследно, управно, меѓународно и имиграционо право." },
      { property: "og:title", content: "Правни услуги — Адвокат Кристина Сакалиева" },
      { property: "og:description", content: "Стратешка, доверлива и ефикасна правна поддршка." },
    ],
  }),
  component: Services,
});

function Services() {
  const { d } = useLang();
  return (
    <>
      <PageHero title={d.servicesTitle} />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mx-auto max-w-3xl text-center text-lg text-foreground/85">{d.servicesIntro}</p>
        <p className="mt-6 text-center font-display text-2xl italic text-primary">{d.servicesLead}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {d.services.map(([title, tag, items], i) => (
            <article key={title} className="rounded-sm border border-border bg-card p-8">
              <span className="font-display text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-display text-3xl text-primary">{title}</h2>
              <p className="mt-1 italic text-muted-foreground">{tag}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {items.map((it) => (
                  <li key={it} className="flex gap-3"><span className="text-primary">◆</span>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
