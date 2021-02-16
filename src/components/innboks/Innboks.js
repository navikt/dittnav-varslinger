import React from "react";
import useSikkerhetsnivaa from "../../hooks/useSikkerhetsnivaa";
import { transformTolokalDatoTid } from "../../utils/datoUtils";
import LenkepanelMedIkon from "../common/LenkepanelMedIkon";
import IkonInnboks from "../../assets/IkonInnboks";
import InnloggingsstatusType from "../../types/InnloggingsstatusType";
import InnboksType from "../../types/InnboksType";
import { GoogleAnalyticsAction, removeFragment } from "../../utils/googleAnalytics";
import "./Innboks.less";

const Innboks = ({ innboks, innloggingsstatus }) => {
  const sikkerhetsnivaa = useSikkerhetsnivaa(innboks, "innboks", innloggingsstatus);
  const lokalDatoTid = transformTolokalDatoTid(innboks.eventTidspunkt);

  return (
    <LenkepanelMedIkon
      className="innboks"
      alt="Innboks"
      overskrift={sikkerhetsnivaa.tekst}
      etikett={lokalDatoTid}
      href={sikkerhetsnivaa.lenke}
      gaCategory="Ditt NAV/Innboks"
      gaAction={GoogleAnalyticsAction.Innboks}
      gaUrl={removeFragment(sikkerhetsnivaa.lenke)}
    >
      <IkonInnboks />
    </LenkepanelMedIkon>
  );
};

Innboks.propTypes = {
  innboks: InnboksType,
  innloggingsstatus: InnloggingsstatusType,
};

Innboks.defaultProps = {
  innboks: null,
  innloggingsstatus: null,
};

export default Innboks;
