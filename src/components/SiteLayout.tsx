import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { CONTACT, useLang } from "@/lib/i18n";
import logoUrl from "@/assets/logo.svg";

export function GoldButton({ children, href, to }: { children: ReactNode; href?: string; to?: "/contact" }) {
  const cls =
    "inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-lg transition hover:brightness-110";
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href} className={cls}>{children}</a>;
}

export function OutlineButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-sm border border-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}

export function Header() {
  const { d, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: d.nav.home },
    { to: "/about", label: d.nav.about },
    { to: "/services", label: d.nav.services },
    { to: "/contact", label: d.nav.contact },
  ] as const;
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="hidden border-b border-border md:block">
        <div className="mx-auto flex max-w-6xl justify-end gap-6 px-6 py-2 text-xs text-muted-foreground">
          <a href={CONTACT.phoneHref} className="hover:text-primary">{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">{CONTACT.email}</a>
          <a href={CONTACT.mapLink} target="_blank" rel="noreferrer" className="hover:text-primary">{d.address}</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="block h-12 w-12 shrink-0 bg-gold"
            style={{
              maskImage: `url(${logoUrl})`,
              WebkitMaskImage: `url(${logoUrl})`,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
          <span className="font-display text-2xl leading-none">
            <span className="text-gold font-semibold">{d.brand.name}</span>
            <span className="block text-[10px] font-sans uppercase tracking-[0.3em] text-muted-foreground">
              {d.brand.tag}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} className="text-sm uppercase tracking-wider text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>
              {l.label}
            </Link>
          ))}
          <LangSwitch lang={lang} setLang={setLang} />
          <Link to="/contact" className="rounded-sm bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            {d.cta}
          </Link>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <LangSwitch lang={lang} setLang={setLang} />
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="text-primary text-2xl">☰</button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="uppercase tracking-wider">{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: string; setLang: (l: "mk" | "en") => void }) {
  return (
    <div className="flex overflow-hidden rounded-sm border border-border text-xs">
      {(["mk", "en"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 uppercase ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
          {l}
        </button>
      ))}
    </div>
  );
}

export function CtaBand() {
  const { d } = useLang();
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-gold">{d.closingTitle}</h2>
        <p className="max-w-2xl text-muted-foreground">{d.closing}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <GoldButton to="/contact">{d.cta}</GoldButton>
          <OutlineButton href={CONTACT.phoneHref}>{d.call}: {CONTACT.phone}</OutlineButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { d } = useLang();
  return (
    <footer className="px-6 py-10 text-center text-sm text-muted-foreground">
      <p className="font-display text-xl text-primary italic">{d.motto}</p>
      <p className="mt-2">© {new Date().getFullYear()} {d.name}. {d.rights}</p>
    </footer>
  );
}

export function PageHero({ title }: { title: string }) {
  return (
    <section className="border-b border-border px-6 py-20 text-center">
      <div className="mx-auto mb-4 h-px w-16 bg-gold" />
      <h1 className="font-display text-5xl md:text-6xl text-gold">{title}</h1>
    </section>
  );
}
