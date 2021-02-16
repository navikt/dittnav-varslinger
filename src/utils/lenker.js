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

const BESKJED_URL = {
  development: "https://www.api.nav.no/person/dittnav-api/beskjed",
  production: "https://www.dev.nav.no/person/dittnav-api/beskjed",
};

const OPPGAVE_URL = {
  development: "https://www.api.nav.no/person/dittnav-api/oppgave",
  production: "https://www.dev.nav.no/person/dittnav-api/oppgave",
};

const INNBOKS_URL = {
  development: "https://www.api.nav.no/person/dittnav-api/innboks",
  production: "https://www.dev.nav.no/person/dittnav-api/innboks",
};

const INAKTIV_BESKJED_URL = {
  development: "https://www.api.nav.no/person/dittnav-api/beskjed/inaktiv",
  production: "https://www.dev.nav.no/person/dittnav-api/beskjed/inaktiv",
};

const INAKTIV_OPPGAVE_URL = {
  development: "https://www.api.nav.no/person/dittnav-api/oppgave/inaktiv",
  production: "https://www.dev.nav.no/person/dittnav-api/oppgave/inaktiv",
};

const INAKTIV_INNBOKS_URL = {
  development: "https://www.api.nav.no/person/dittnav-api/innboks/inaktiv",
  production: "https://www.dev.nav.no/person/dittnav-api/innboks/inaktiv",
};

const VARSLINGER_URL = {
  development: "https://www.api.nav.no/person/dittnav/varslinger",
  production: "https://www.dev.nav.no/person/dittnav/varslinger",
};

const DONE_URL = {
  development: "https://www.api.nav.no/person/dittnav-api/produce/done",
  production: "https://www.dev.nav.no/person/dittnav-api/produce/done",
};

export const dittnavApiUrl = DITTNAV_API_URL[getEnvironment()];
export const navNoUrl = NAVNO_URL[getEnvironment()];
export const innloggingstatusUrl = INNLOGGINGSSTATUS_URL[getEnvironment()];
export const beskjedUrl = BESKJED_URL[getEnvironment()];
export const oppgaveUrl = OPPGAVE_URL[getEnvironment()];
export const innboksUrl = INNBOKS_URL[getEnvironment()];
export const inaktivBeskjedUrl = INAKTIV_BESKJED_URL[getEnvironment()];
export const inaktivOppgaveUrl = INAKTIV_OPPGAVE_URL[getEnvironment()];
export const innaktivInnboksUrl = INAKTIV_INNBOKS_URL[getEnvironment()];
export const varslingerUrl = VARSLINGER_URL[getEnvironment()];
export const doneUrl = DONE_URL[getEnvironment()];
export const minInnboksUrl = "";
export const saksoversiktUrl = "";
