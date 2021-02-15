import get from "./msw-utils";
import oppfolging from "./oppfolging.json";
import meldekort from "./meldekort.json";
import navn from "./navn.json";
import ident from "./ident.json";
import paabegynte from "./paabegynte.json";
import ubehandlede from "./ubehandlede.json";
import sakstema from "./sakstema.json";

import innloggingsstatus from "./innloggingsstatus.json";
import beskjed from "./beskjed.json";
import oppgave from "./oppgave.json";
import innboks from "./innboks.json";
import beskjedInaktiv from "./beskjed-inaktiv.json";
import oppgaveInaktiv from "./oppgave-inaktiv.json";
import innboksInaktiv from "./innboks-inaktiv.json";

export const handlers = [
  get("https://www.api.nav.no/person/dittnav-api/oppfolging", oppfolging),
  get("https://www.api.nav.no/person/dittnav-api/meldekortinfo", meldekort),
  get("https://www.api.nav.no/person/dittnav-api/personalia/navn", navn),
  get("https://www.api.nav.no/dittnav-api/personalia/ident", ident),
  get("https://www.api.nav.no/person/dittnav-api/saker/paabegynte", paabegynte),
  get("https://www.api.nav.no/person/dittnav-api/meldinger/ubehandlede", ubehandlede),
  get("https://www.api.nav.no/person/dittnav-api/saker/sakstema", sakstema),
  get("https://www.api.nav.no/innloggingsstatus/summary", innloggingsstatus),
  get("https://www.api.nav.no/person/dittnav-api/beskjed", beskjed),
  get("https://www.api.nav.no/person/dittnav-api/oppgave", oppgave),
  get("https://www.api.nav.no/person/dittnav-api/innboks", innboks),
  get("https://www.api.nav.no/person/dittnav-api/beskjed/inaktiv", beskjedInaktiv),
  get("https://www.api.nav.no/person/dittnav-api/oppgave/inaktiv", oppgaveInaktiv),
  get("https://www.api.nav.no/person/dittnav-api/innboks/inaktiv", innboksInaktiv),
  get("https://www.api.nav.no/person/dittnav-api/produce/done", {}),
];
