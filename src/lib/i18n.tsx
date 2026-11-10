import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "mk" | "en";

export const CONTACT = {
  phone: "+389 72 275 746",
  phoneHref: "tel:+38972275746",
  email: "advokatkristinasakalieva@gmail.com",
  mapLink: "https://maps.app.goo.gl/TpufB2TJSPExtQhj9",
  mapEmbed:
    "https://www.google.com/maps?q=7-mi+Septemvri+83A,+Kavadarci+1430,+North+Macedonia&output=embed",
};

const t = {
  mk: {
    name: "Адвокат Кристина Сакалиева",
    brand: { name: "Кристина Сакалиева", tag: "Адвокат" },
    heroTitle: "Сигурен партнер. Јасни решенија. Заштита без компромис.",
    benefits: [
      ["Заштита без компромис", "Вашите интереси секогаш на прво место."],
      ["Сигурен партнер", "До вас во секоја правна ситуација."],
      ["Јасни решенија", "Сложените правни прашања ги објаснуваме едноставно."],
    ] as [string, string][],
    nav: { home: "Почетна", about: "За нас", services: "Услуги", contact: "Контакт" },
    cta: "Закажете консултација",
    call: "Јавете се",
    motto: "Nemo est supra leges!",
    heroText:
      "Стручна, сигурна и етичка правна помош за поединци и правни лица — со локално знаење и меѓународна перспектива.",
    address: "ул. „7-ми Септември“ бр. 83А, 1430 Кавадарци",
    areas: "Области на пракса",
    more: "Сите услуги",
    aboutTitle: "За нас",
    about: [
      "Адвокатската канцеларија на Адвокат Кристина Сакалиева е основана со јасна визија - да обезбедува стручна, сигурна и етичка правна помош за секој клиент.",
      "Со посветеност на највисоко скалило на професионализам и индивидуален пристап, ние се грижиме вашите права да бидат заштитени, а вашите интереси - застапени со интегритет и доверба. Нашиот пристап се базира на темелна правна анализа, стратешко размислување и континуирана комуникација со клиентот.",
      "Без разлика дали станува збор за правен совет, застапување пред суд, или подготовка на правни документи - ние сме тука да ви помогнеме на секој чекор од вашиот животен пат.",
    ],
    servicesTitle: "Услуги",
    servicesIntro:
      "Во адвокатската канцеларија на адвокат Кристина Сакалиева, ние обезбедуваме стратешка, доверлива и ефикасна правна поддршка прилагодена на потребите на поединци и правни лица. Без разлика дали ви е потребна правна помош за лични прашања или деловни операции, нашиот тим е тука да испорача резултати - не само совети.",
    servicesLead: "Специјализирани сме за следниве правни области:",
    closingTitle: "Секој правен предизвик заслужува прецизно решение.",
    closing:
      "Контактирајте не и дозволете ни да бидеме вашиот доверлив правен партнер - со локално знаење и меѓународна перспектива.",
    contactTitle: "Контакт",
    contactIntro: "Јавете се, пишете ни или посетете не во канцеларијата во Кавадарци.",
    phone: "Телефон",
    email: "Е-пошта",
    location: "Адреса",
    openMap: "Отвори во Google Maps",
    rights: "Сите права задржани.",
    services: [
      ["Граѓанско право", "Ваш правен штит во секојдневниот живот.", ["Судски постапки и застапување", "Наплата на побарувања", "Имотно-правни односи", "Надомест на штета"]],
      ["Облигационо право", "Договори што ве заштитуваат, не ве ограничуваат.", ["Изработка и анализа на договори", "Застапување во договорни спорови", "Преговарање и правно советување"]],
      ["Стопанско и деловно право", "Сигурна правна основа за вашето деловно работење.", ["Деловни договори и трансакции", "Стопански спорови", "Регулаторна усогласеност"]],
      ["Корпоративно право", "Правна структура што расте со вашата компанија.", ["Основање и регистрација на друштва", "Корпоративно управување и промени", "Советување за внатрешни акти и статути"]],
      ["Кривично право", "Заштита на вашите права во најкритичните моменти.", ["Одбрана во кривични и прекршочни постапки", "Поднесување пријави", "Присуство при испитувања и истраги"]],
      ["Семејно право", "Професионална поддршка во лични и емотивни процеси.", ["Развод, старателство и издршка", "Поделба на брачен имот", "Семејна медијација"]],
      ["Наследно право", "Јасна распределба на вашето наследство.", ["Наследни постапки", "Составување тестаменти", "Решавање наследни спорови"]],
      ["Административно право", "Правна заштита пред институциите.", ["Жалби против управни одлуки", "Управни постапки и дозволи", "Застапување пред државни органи"]],
      ["Меѓународно право", "Правна експертиза во транснационални односи.", ["Признавање на странски одлуки", "Меѓународни договори и прекугранични спорови", "Поддршка за странски лица и компании"]],
      ["Имиграционо право", "Вашата правна поддршка при доселување, престој и државјанство.", ["Правна помош за добивање виза и дозвола за престој во РСМ", "Поднесување барања за привремен и постојан престој", "Постапки за стекнување државјанство", "Поддршка за странски инвеститори, вработени и семејства", "Правно посредништво со институции (МВР, странски мисии итн.)"]],
      ["Авторско право и интелектуална сопственост", "Заштитете го она што го создавате.", ["Регистрација и заштита на авторски дела, патенти и трговски марки", "Договори за лиценцирање", "Застапување при повреда на права"]],
    ] as [string, string, string[]][],
  },
  en: {
    name: "Attorney Kristina Sakalieva",
    brand: { name: "Kristina Sakalieva", tag: "Attorney at law" },
    heroTitle: "A reliable partner. Clear solutions. Uncompromising protection.",
    benefits: [
      ["Uncompromising protection", "Your interests always come first."],
      ["A reliable partner", "By your side in every legal situation."],
      ["Clear solutions", "We explain complex legal matters simply."],
    ] as [string, string][],
    nav: { home: "Home", about: "About", services: "Services", contact: "Contact" },
    cta: "Schedule an appointment",
    call: "Call now",
    motto: "Nemo est supra leges!",
    heroText:
      "Professional, reliable and ethical legal assistance for individuals and companies — with local knowledge and an international perspective.",
    address: "\u201C7th of September\u201D no. 83A, 1430 Kavadarci",
    areas: "Areas of Practice",
    more: "All services",
    aboutTitle: "About Us",
    about: [
      "The law office of Attorney Kristina Sakalieva was founded with a clear vision — to provide professional, reliable and ethical legal assistance to every client.",
      "With dedication to the highest level of professionalism and an individual approach, we make sure your rights are protected and your interests represented with integrity and trust. Our approach is based on thorough legal analysis, strategic thinking and continuous communication with the client.",
      "Whether it is legal advice, representation in court, or preparation of legal documents — we are here to help you at every step of your journey.",
    ],
    servicesTitle: "Services",
    servicesIntro:
      "At the law office of Attorney Kristina Sakalieva, we provide strategic, confidential and efficient legal support tailored to the needs of individuals and legal entities. Whether you need legal help with personal matters or business operations, our team is here to deliver results — not just advice.",
    servicesLead: "We specialize in the following areas of law:",
    closingTitle: "Every legal challenge deserves a precise solution.",
    closing:
      "Contact us and let us be your trusted legal partner — with local knowledge and an international perspective.",
    contactTitle: "Contact",
    contactIntro: "Call, write to us, or visit our office in Kavadarci.",
    phone: "Phone",
    email: "Email",
    location: "Address",
    openMap: "Open in Google Maps",
    rights: "All Rights Reserved.",
    services: [
      ["Civil Law", "Your legal shield in everyday life.", ["Court proceedings and representation", "Debt collection", "Property law matters", "Damage compensation"]],
      ["Law of Obligations", "Contracts that protect you, not limit you.", ["Drafting and review of contracts", "Representation in contract disputes", "Negotiation and legal counsel"]],
      ["Commercial & Business Law", "A solid legal foundation for your business.", ["Business contracts and transactions", "Commercial disputes", "Regulatory compliance"]],
      ["Corporate Law", "A legal structure that grows with your company.", ["Company formation and registration", "Corporate governance and changes", "Advice on internal acts and statutes"]],
      ["Criminal Law", "Protecting your rights in the most critical moments.", ["Defense in criminal and misdemeanor proceedings", "Filing criminal complaints", "Presence during interrogations and investigations"]],
      ["Family Law", "Professional support in personal and emotional processes.", ["Divorce, custody and support", "Division of marital property", "Family mediation"]],
      ["Inheritance Law", "A clear distribution of your legacy.", ["Inheritance proceedings", "Drafting wills", "Resolving inheritance disputes"]],
      ["Administrative Law", "Legal protection before institutions.", ["Appeals against administrative decisions", "Administrative procedures and permits", "Representation before state bodies"]],
      ["International Law", "Legal expertise in transnational relations.", ["Recognition of foreign judgments", "International contracts and cross-border disputes", "Support for foreign individuals and companies"]],
      ["Immigration Law", "Your legal support for immigration, residence and citizenship.", ["Visa and residence permit assistance in North Macedonia", "Applications for temporary and permanent residence", "Citizenship procedures", "Support for foreign investors, employees and families", "Liaison with institutions (Ministry of Interior, foreign missions, etc.)"]],
      ["Copyright & Intellectual Property", "Protect what you create.", ["Registration and protection of works, patents and trademarks", "Licensing agreements", "Representation in infringement cases"]],
    ] as [string, string, string[]][],
  },
};

type Dict = (typeof t)["mk"];
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; d: Dict }>({
  lang: "mk",
  setLang: () => {},
  d: t.mk,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mk");
  useEffect(() => {
    const s = localStorage.getItem("lang");
    if (s === "en" || s === "mk") setLangState(s);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };
  return <Ctx.Provider value={{ lang, setLang, d: t[lang] as Dict }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
