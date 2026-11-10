import { createFileRoute, Link } from "@tanstack/react-router";
import office from "@/assets/office.jpg";
import { CONTACT, useLang } from "@/lib/i18n";
import { CtaBand, GoldButton, OutlineButton } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Адвокат Кристина Сакалиева | Attorney Kristina Sakalieva — Кавадарци" },
      { name: "description", content: "Адвокатска канцеларија во Кавадарци: граѓанско, кривично, семејно, корпоративно и имиграционо право." },
      { property: "og:title", content: "Адвокат Кристина Сакалиева" },
      { property: "og:description", content: "Стручна, сигурна и етичка правна помош во Кавадарци." },
    ],
  }),
  component: Index,
});

function Index() {
  const { d } = useLang();
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={office} alt="" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-fade" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="font-display text-xl italic text-primary">{d.motto}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-7xl">{d.heroTitle}</h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">{d.heroText}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <GoldButton to="/contact">{d.cta}</GoldButton>
            <OutlineButton href={CONTACT.phoneHref}>{d.call}: {CONTACT.phone}</OutlineButton>
          </div>
        </div>
      </section>
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
          {d.benefits.map(([title, text]) => (
            <div key={title}>
              <div className="mb-4 h-px w-10 bg-gold" />
              <h3 className="font-display text-2xl text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-px w-16 bg-gold" />
          <h2 className="font-display text-4xl md:text-5xl">{d.areas}</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {d.services.slice(0, 6).map(([title, tag]) => (
            <div key={title} className="bg-background p-8 transition hover:bg-card">
              <h3 className="font-display text-2xl text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tag}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="text-sm uppercase tracking-widest text-primary hover:underline">{d.more} →</Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
