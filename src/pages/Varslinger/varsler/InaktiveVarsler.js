import React from "react";
import { FormattedMessage } from "react-intl";
import { Systemtittel } from "nav-frontend-typografi";
import Brukernotifikasjoner from "../../../components/Brukernotifikasjoner";
import { useQuery } from "react-query";
import { fetcher } from "../../../api";
import { inaktivBeskjedUrl, inaktivOppgaveUrl, innaktivInnboksUrl } from "../../../utils/lenker";

const InaktiveVarsler = () => {
  const { data: inaktiveBeskjeder } = useQuery(inaktivBeskjedUrl, fetcher);
  const { data: inaktiveOppgaver } = useQuery(inaktivOppgaveUrl, fetcher);
  const { data: inaktiveInnbokser } = useQuery(innaktivInnboksUrl, fetcher);

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
