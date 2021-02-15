import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Innlogging } from "../constants";

const useSikkerhetsnivaa = (brukernotifikasjon, type, innloggingsstatus) => {
  const intl = useIntl();
  const skalMaskeres = brukernotifikasjon.sikkerhetsnivaa === 4 && innloggingsstatus.authLevel === 3;
  const tekst = skalMaskeres ? intl.formatMessage({ id: `${type}.maskert.tekst` }) : brukernotifikasjon.tekst;
  const lenke = skalMaskeres ? `${Innlogging.LOGINSERVICE_LEVEL_4_URL}` : brukernotifikasjon.link;

  return {
    skalMaskeres,
    tekst,
    lenke,
  };
};

export default useSikkerhetsnivaa;
