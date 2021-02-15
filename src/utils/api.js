import { dittnavApiUrl, navNoUrl } from "./lenker";

export const buildApiUrl = (path) => {
  return `${dittnavApiUrl}${path || ""}`;
};

export const buildTestProducerUrl = (path) => {
  const testProducerBaseUrl = "https://www.api.nav.no/person/dittnav-event-test-producer";

  return `${testProducerBaseUrl}${path || ""}`;
};

export const buildTidslinjeUrl = (path, queryString) => {
  const tidslinjeBaseUrl = "https://www.api.nav.no/person/dittnav-tidslinje";

  return `${tidslinjeBaseUrl}${path || ""}${queryString || ""}`;
};

export const buildNavNoUrl = (path) => {
  return `${navNoUrl}${path || ""}`;
};

export const buildLoginserviceUrl = (level) => {
  const loginserviceUrl = "https://www.api.nav.no/loginservice";
  const loginServiceLevelFourUrl = "https://www.api.nav.no/loginservice";

  return level ? loginServiceLevelFourUrl : loginserviceUrl;
};
