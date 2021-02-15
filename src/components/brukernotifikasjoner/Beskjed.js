import React from "react";
import { bool } from "prop-types";
import useSikkerhetsnivaa from "../../hooks/useSikkerhetsnivaa";
import { transformTolokalDatoTid } from "../../utils/datoUtils";
import PanelMedIkon from "../common/PanelMedIkon";
import IkonBeskjed from "../../assets/IkonBeskjed";
import InnloggingsstatusType from "../../types/InnloggingsstatusType";
import BeskjedType from "../../types/BeskjedType";
import { GoogleAnalyticsAction, GoogleAnalyticsCategory, trackEvent } from "../../utils/googleAnalytics";
import useMutateBeskjed from "../../hooks/useMutateBeskjed";
import "../../less/Beskjed.less";

const onClickBeskjed = (beskjed, mutation) => {
  mutation.mutate(beskjed);
  trackEvent(GoogleAnalyticsCategory.Forside, GoogleAnalyticsAction.BeskjedLukk, "");
};

const Beskjed = ({ beskjed, innloggingsstatus, erAktiv, erInaktiv }) => {
  const mutation = useMutateBeskjed();

  const sikkerhetsnivaa = useSikkerhetsnivaa(beskjed, "beskjed", innloggingsstatus);
  const lenkeTekst = sikkerhetsnivaa.skalMaskeres ? "beskjed.lenke.stepup.tekst" : "beskjed.lenke.tekst";
  const lokalDatoTid = transformTolokalDatoTid(beskjed.eventTidspunkt);

  const visKnapp = !(sikkerhetsnivaa.skalMaskeres || erInaktiv);

  return (
    <PanelMedIkon
      className="beskjed"
      alt="Beskjed"
      overskrift={sikkerhetsnivaa.tekst}
      etikett={lokalDatoTid}
      onClick={() => onClickBeskjed(beskjed, mutation)}
      skjermleserTekst="beskjed.knapp.skjermleser.tekst"
      lenke={sikkerhetsnivaa.lenke}
      lenkeTekst={lenkeTekst}
      gaCategory="Ditt NAV/Beskjed"
      gaAction={GoogleAnalyticsAction.Beskjed}
      knapp={visKnapp}
    >
      <IkonBeskjed />
    </PanelMedIkon>
  );
};

Beskjed.propTypes = {
  beskjed: BeskjedType,
  innloggingsstatus: InnloggingsstatusType,
  erAktiv: bool,
  erInaktiv: bool,
};

Beskjed.defaultProps = {
  beskjed: null,
  innloggingsstatus: null,
  erAktiv: false,
  erInaktiv: false,
};

export default Beskjed;
