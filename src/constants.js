import { buildApiUrl, buildNavNoUrl, buildTestProducerUrl, buildLoginserviceUrl } from "./utils/api";
import { innloggingsstatusUrl } from "./utils/lenker";

export const NAV_NO_URL = buildNavNoUrl();

export const OPPFOLGING_URL = buildApiUrl("/oppfolging");
export const MELDEKORT_URL = buildApiUrl("/meldekortinfo");
export const SAKER_URL = buildApiUrl("/saker/paabegynte");
export const MELDINGER_URL = buildApiUrl("/meldinger/ubehandlede");
export const SAKSTEMA_URL = buildApiUrl("/saker/sakstema");
export const BESKJED_URL = buildApiUrl("/beskjed");
export const OPPGAVE_URL = buildApiUrl("/oppgave");
export const INNBOKS_URL = buildApiUrl("/innboks");
export const BESKJED_INAKTIV_URL = buildApiUrl("/beskjed/inaktiv");
export const OPPGAVE_INAKTIV_URL = buildApiUrl("/oppgave/inaktiv");
export const INNBOKS_INAKTIV_URL = buildApiUrl("/innboks/inaktiv");
export const VARSLINGER_URL = buildNavNoUrl("/person/dittnav/varslinger");
export const DONE_URL = buildApiUrl("/produce/done");
export const INNLOGGINGSSTATUS_URL = innloggingsstatusUrl;

export const TestProducer = Object.freeze({
  URL: buildTestProducerUrl(),
  DONE_ALL_URL: buildTestProducerUrl("/produce/done/all"),
  STATUSOPPDATERING_URL: buildTestProducerUrl("/produce/statusoppdatering"),
});

export const Innlogging = Object.freeze({
  LOGINSERVICE_URL: buildLoginserviceUrl(),
  LOGINSERVICE_LEVEL_4_URL: buildLoginserviceUrl(4),
});

export const Path = Object.freeze({
  CONTEXT: "/person/dittnav",
  MELDEKORT: "/meldekort",
  ETTERREGISTRERTE_MELDEKORT: "/meldekort/etterregistrer-meldekort",
});

export const Format = Object.freeze({
  SAKSTEMA: "YYYY-MM-DD-hh:mm:ss+Z",
  BRUKERNOTIFIKASJONER: "YYYY-MM-DDTHH:mm:ss:SSS[Z]",
});

export const Toggle = Object.freeze({
  FEATURE_TOGGLES: "", // a,b,c etc..
  TEST_SIDE: null,
  IS_DEV: null,
  IS_TEST: null,
});

export const TidslinjeApi = Object.freeze({
  PRODUSENT: "www.api.nav.no/person/dittnav-tidslinje",
  GRUPPERINGS_ID: "1234",
});
