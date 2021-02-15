import { buildApiUrl, buildNavNoUrl, buildTestProducerUrl, buildLoginserviceUrl } from "./utils/api";
import { innloggingsstatusUrl } from "./utils/lenker";

export const BESKJED_URL = buildApiUrl("/beskjed");

export const OPPGAVE_URL = buildApiUrl("/oppgave");

export const INNBOKS_URL = buildApiUrl("/innboks");

export const BESKJED_INAKTIV_URL = buildApiUrl("/beskjed/inaktiv");

export const OPPGAVE_INAKTIV_URL = buildApiUrl("/oppgave/inaktiv");

export const INNBOKS_INAKTIV_URL = buildApiUrl("/innboks/inaktiv");

export const VARSLINGER_URL = buildNavNoUrl("/person/dittnav/varslinger");

export const DONE_URL = buildApiUrl("/produce/done");

export const INNLOGGINGSSTATUS_URL = innloggingsstatusUrl;

export const TEST_SIDE = null;

export const TestProducer = Object.freeze({
  URL: buildTestProducerUrl(),
  DONE_ALL_URL: buildTestProducerUrl("/produce/done/all"),
  STATUSOPPDATERING_URL: buildTestProducerUrl("/produce/statusoppdatering"),
});

export const Innlogging = Object.freeze({
  LOGINSERVICE_URL: buildLoginserviceUrl(),
  LOGINSERVICE_LEVEL_4_URL: buildLoginserviceUrl(4),
});

export const Format = Object.freeze({
  SAKSTEMA: "YYYY-MM-DD-hh:mm:ss+Z",
  BRUKERNOTIFIKASJONER: "YYYY-MM-DDTHH:mm:ss:SSS[Z]",
});

export const TidslinjeApi = Object.freeze({
  PRODUSENT: "www.api.nav.no/person/dittnav-tidslinje",
  GRUPPERINGS_ID: "1234",
});
