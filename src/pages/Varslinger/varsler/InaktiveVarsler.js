import React from "react";
import { FormattedMessage } from "react-intl";
import { Systemtittel } from "nav-frontend-typografi";
import Brukernotifikasjoner from "../../../components/Brukernotifikasjoner";
import { useQuery } from "react-query";
import { BESKJED_INAKTIV_URL, INNBOKS_INAKTIV_URL, OPPGAVE_INAKTIV_URL } from "../../../constants";
import { fetcher } from "../../../api";

const InaktiveVarsler = () => {
  const { data: inaktiveBeskjeder } = useQuery(BESKJED_INAKTIV_URL, fetcher);
  const { data: inaktiveOppgaver } = useQuery(OPPGAVE_INAKTIV_URL, fetcher);
  const { data: inaktiveInnbokser } = useQuery(INNBOKS_INAKTIV_URL, fetcher);

  if (!inaktiveBeskjeder || !inaktiveOppgaver || !inaktiveInnbokser) {
    return null;
  }

  return (
    <div className="inaktive-varsler" id="inaktive-varsler">
      {(inaktiveBeskjeder || inaktiveOppgaver || inaktiveInnbokser) && (
        <div className="inaktive-varsler__tittel">
          <Systemtittel>
            <FormattedMessage id="varslinger.inaktive.tittel" />
          </Systemtittel>
        </div>
      )}
      <Brukernotifikasjoner
        beskjeder={inaktiveBeskjeder}
        oppgaver={inaktiveOppgaver}
        innbokser={inaktiveInnbokser}
        erInaktiv
      />
    </div>
  );
};

export default InaktiveVarsler;
