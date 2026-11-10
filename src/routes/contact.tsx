import { createFileRoute } from "@tanstack/react-router";
import { CONTACT, useLang } from "@/lib/i18n";
import { GoldButton, OutlineButton, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Контакт | Адвокат Кристина Сакалиева — Кавадарци" },
      { name: "description", content: "Закажете консултација: +389 72 275 746, ул. 7-ми Септември 83А, Кавадарци." },
      { property: "og:title", content: "Контакт — Адвокат Кристина Сакалиева" },
      { property: "og:description", content: "Телефон, е-пошта и мапа до канцеларијата во Кавадарци." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { d } = useLang();
  const items = [
    { label: d.phone, value: CONTACT.phone, href: CONTACT.phoneHref },
    { label: d.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: d.location, value: d.address, href: CONTACT.mapLink },
  ];
  return (
    <>
      <PageHero title={d.contactTitle} />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <p className="font-display text-3xl text-gold md:text-4xl">{d.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">{d.motto}</p>
          <p className="mt-6 text-lg text-foreground/85">{d.contactIntro}</p>
          <div className="mt-8 space-y-4">
            {items.map((it) => (
              <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block rounded-sm border border-border bg-card p-6 transition hover:border-primary">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{it.label}</span>
                <span className="mt-1 block break-all font-display text-2xl text-primary">{it.value}</span>
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <GoldButton href={CONTACT.phoneHref}>{d.call}</GoldButton>
            <OutlineButton href={`mailto:${CONTACT.email}`}>{d.email}</OutlineButton>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <iframe title="Map" src={CONTACT.mapEmbed} loading="lazy" className="min-h-[420px] w-full flex-1 rounded-sm border border-border grayscale-[40%]" />
          <a href={CONTACT.mapLink} target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest text-primary hover:underline">{d.openMap} →</a>
        </div>
      </section>
    </>
  );
}
