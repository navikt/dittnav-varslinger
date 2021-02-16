import { buildApiUrl, buildNavNoUrl, buildTestProducerUrl, buildLoginserviceUrl } from "./utils/url";
import { innloggingsstatusUrl } from "./utils/lenker";

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
