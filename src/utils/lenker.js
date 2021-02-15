const getEnvironment = () => {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
};

const DITTNAV_API_URL = {
  development: "https://www.api.nav.no/person/dittnav-api",
  production: "https://www.dev.nav.no/person/dittnav-api",
};

const NAVNO_URL = {
  development: "https://www.api.nav.no",
  production: "https://www.dev.nav.no",
};

const INNLOGGINGSSTATUS_URL = {
  development: "https://www.api.nav.no/innloggingsstatus/summary",
  production: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/summary",
};

export const dittnavApiUrl = DITTNAV_API_URL[getEnvironment()];
export const navNoUrl = NAVNO_URL[getEnvironment()];
export const innloggingsstatusUrl = INNLOGGINGSSTATUS_URL[getEnvironment()];

export const lenker = {
  ledigeStillinger: {
    tittel: "Ledige stillinger",
    url: "https://arbeidsplassen.nav.no/stillinger",
  },
  uforetrygd: {
    tittel: "Uføretrygd",
    url: "${window.env.TJENESTER_URL}/pselv/publisering/uforetrygd.jsf?context=ut",
  },
  dineForeldrepenger: {
    tittel: "Dine foreldrepenger",
    url: "https://foreldrepenger.nav.no",
  },
  aktivitetsplan: {
    tittel: "Aktivitetsplan",
    url: "${window.env.AKTIVITETSPLAN_URL}",
  },
  meldekort: {
    tittel: "Meldekort",
    url: "${window.env.NAVNO_URL}/meldekort/om-meldekort",
  },
  personopplysninger: {
    tittel: "Personopplysninger",
    url: "${window.env.NAVNO_URL}/person/personopplysninger",
  },
  skjemaer: {
    tittel: "Skjemaer",
    url: "${window.env.NAVNO_URL}/soknader",
  },
  dinPensjon: {
    tittel: "Din pensjon",
    url: "${window.env.TJENESTER_URL}/pselv/publisering/dinpensjon.jsf",
  },
  dineStillingssok: {
    tittel: "Dine stillingssøk",
    url: "https://stillingsok.nav.no/pam-stillingsok/lagrede-sok",
  },
  veilederArbeidssoker: {
    tittel: "Veileder for arbeidssøker",
    url: "${window.env.VEILEDERARBEIDSSOKER_URL}",
  },
  registrerDegSomArbeidssoker: {
    tittel: "Registrer deg som arbeidssøker",
    url: "${window.env.ARBEIDSSOKERREGISTRERING_URL}",
  },
  dittSykefravaer: {
    tittel: "Ditt sykefravær",
    url: "${window.env.TJENESTER_URL}/sykefravaer",
  },
  utbetalingsoversikt: {
    tittel: "Dine utbetalinger",
    url: "${window.env.TJENESTER_URL}/utbetalingsoversikt",
  },
  saksoversikt: {
    tittel: "Dine saker",
    url: "${window.env.TJENESTER_URL}/saksoversikt",
  },
  saksoversiktTema: {
    tittel: "Dine saker",
    url: "${window.env.TJENESTER_URL}/saksoversikt/tema",
  },
  saksoversiktHjelp: {
    tittel: "Dine saker hjelp",
    url: "#",
  },
  innboks: {
    tittel: "Innboks",
    url: "${window.env.TJENESTER_URL}/mininnboks",
  },
  digisos: {
    tittel: "Digisos",
    url: "${window.env.NAVNO_URL}/sosialhjelp/innsyn",
  },
  koronaVeiviser: {
    tittel: "Koronavirus – hva gjelder i min situasjon?",
    url: "${window.env.NAVNO_URL}/person/koronaveiviser",
  },
  dagpengerForskudd: {
    tittel: "Trenger du forskudd på dagpenger?",
    url: "${window.env.NAVNO_URL}/dagpenger/forskudd",
  },
  koronaBehandlingstid: {
    tittel: "Lengre saksbehandlingstider",
    url: "${window.env.NAVNO_URL}/no/nav-og-samfunn/om-nav/saksbehandlingstider-i-nav",
  },
  koronaSituasjon: {
    tittel: "Tilbakebetaling av forskudd på dagpenger er i gang",
    url: "${window.env.NAVNO_URL}/dagpenger/forskudd/oversikt",
  },
  dineFullmakter: {
    tittel: "Dine fullmakter",
    url: "${window.env.NAVNO_URL}/person/pdl-fullmakt-ui",
  },
  sykdomIFamilien: {
    tittel: "Din oversikt - Sykdom i familien",
    url: "${window.env.SYKDOM_I_FAMILIEN_URL}",
  },
};
