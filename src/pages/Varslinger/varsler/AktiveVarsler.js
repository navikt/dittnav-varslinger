import React from "react";
import { FormattedMessage } from "react-intl";
import { Systemtittel } from "nav-frontend-typografi";
import Brukernotifikasjoner from "../../../components/Brukernotifikasjoner";
import { useQuery } from "react-query";
import { BESKJED_URL, INNBOKS_URL, OPPGAVE_URL } from "../../../constants";
import { fetcher } from "../../../api";

const antallVarsler = (varsler) => (varsler && varsler.content ? varsler.content.length : 0);

const AktiveVarsler = () => {
  const { data: beskjeder } = useQuery(BESKJED_URL, fetcher);
  const { data: oppgaver } = useQuery(OPPGAVE_URL, fetcher);
  const { data: innbokser } = useQuery(INNBOKS_URL, fetcher);

  const antallAktiveVarsler = antallVarsler(beskjeder) + antallVarsler(oppgaver) + antallVarsler(innbokser);

  return (
    <div className="aktive-varsler">
      {beskjeder && oppgaver && innbokser && (
        <div className="aktive-varsler__tittel">
          <Systemtittel>
            <FormattedMessage id="varslinger.aktive.tittel" values={{ antall: antallAktiveVarsler }} />
          </Systemtittel>
        </div>
      )}
      <Brukernotifikasjoner beskjeder={beskjeder} oppgaver={oppgaver} innbokser={innbokser} erAktiv />
    </div>
  );
};

export default AktiveVarsler;
