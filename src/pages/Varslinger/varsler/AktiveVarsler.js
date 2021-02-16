import React from "react";
import { FormattedMessage } from "react-intl";
import { Systemtittel } from "nav-frontend-typografi";
import Brukernotifikasjoner from "../../../components/Brukernotifikasjoner";
import { useQuery } from "react-query";
import { fetcher } from "../../../api";
import { beskjedUrl, innboksUrl, oppgaveUrl } from "../../../utils/lenker";

const antallVarsler = (varsler) => varsler?.length || 0;

const AktiveVarsler = () => {
  const { data: beskjeder } = useQuery(beskjedUrl, fetcher);
  const { data: oppgaver } = useQuery(oppgaveUrl, fetcher);
  const { data: innbokser } = useQuery(innboksUrl, fetcher);

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
      <Brukernotifikasjoner beskjeder={beskjeder} oppgaver={oppgaver} innbokser={innbokser} />
    </div>
  );
};

export default AktiveVarsler;
