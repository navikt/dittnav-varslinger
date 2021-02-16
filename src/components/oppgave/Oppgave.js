import React from "react";
import useSikkerhetsnivaa from "../../hooks/useSikkerhetsnivaa";
import LenkepanelMedIkon from "../common/LenkepanelMedIkon";
import { transformTolokalDatoTid } from "../../utils/datoUtils";
import IkonOppgave from "../../assets/IkonOppgave";
import OppgaveType from "../../types/OppgaveType";
import InnloggingsstatusType from "../../types/InnloggingsstatusType";
import { GoogleAnalyticsAction, removeFragment } from "../../utils/googleAnalytics";
import "./Oppgave.less";

const Oppgave = ({ oppgave, innloggingsstatus }) => {
  const sikkerhetsnivaa = useSikkerhetsnivaa(oppgave, "oppgave", innloggingsstatus);
  const lokalDatoTid = transformTolokalDatoTid(oppgave.eventTidspunkt);

  return (
    <LenkepanelMedIkon
      className="oppgave"
      alt="Oppgave"
      overskrift={sikkerhetsnivaa.tekst}
      etikett={lokalDatoTid}
      href={sikkerhetsnivaa.lenke}
      gaCategory="Ditt NAV/Oppgave"
      gaAction={GoogleAnalyticsAction.Oppgave}
      gaUrl={removeFragment(sikkerhetsnivaa.lenke)}
    >
      <IkonOppgave />
    </LenkepanelMedIkon>
  );
};

Oppgave.propTypes = {
  oppgave: OppgaveType,
  innloggingsstatus: InnloggingsstatusType,
};

Oppgave.defaultProps = {
  oppgave: null,
  innloggingsstatus: null,
};

export default Oppgave;
