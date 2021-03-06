import React from "react";
import { arrayOf, bool } from "prop-types";
import Beskjed from "./beskjed/Beskjed";
import Oppgave from "./oppgave/Oppgave";
import Innboks from "./innboks/Innboks";
import { byEventTidspunkt } from "../utils/datoUtils";
import BeskjedType from "../types/BeskjedType";
import OppgaveType from "../types/OppgaveType";
import InnboksType from "../types/InnboksType";
import { useQuery } from "react-query";
import { fetcher } from "../api";
import { innloggingstatusUrl } from "../utils/lenker";

const Brukernotifikasjoner = ({ beskjeder, oppgaver, innbokser, erAktiv, erInaktiv }) => {
  const { data: innloggingsstatus, isSuccess } = useQuery(innloggingstatusUrl, fetcher);

  if (!isSuccess) {
    return null;
  }

  return (
    <>
      {oppgaver &&
        innloggingsstatus &&
        oppgaver
          .sort(byEventTidspunkt)
          .map((o) => <Oppgave key={o.eventId} oppgave={o} innloggingsstatus={innloggingsstatus} />)}
      {beskjeder &&
        innloggingsstatus &&
        beskjeder
          .sort(byEventTidspunkt)
          .map((b) => (
            <Beskjed
              key={b.uid}
              beskjed={b}
              beskjeder={b}
              innloggingsstatus={innloggingsstatus}
              erAktiv={erAktiv}
              erInaktiv={erInaktiv}
            />
          ))}
      {innbokser &&
        innloggingsstatus &&
        innbokser
          .sort(byEventTidspunkt)
          .map((i) => <Innboks key={i.eventId} innboks={i} innloggingsstatus={innloggingsstatus} />)}
    </>
  );
};

Brukernotifikasjoner.propTypes = {
  beskjeder: arrayOf(BeskjedType),
  oppgaver: arrayOf(OppgaveType),
  innbokser: arrayOf(InnboksType),
  erAktiv: bool,
  erInaktiv: bool,
};

Brukernotifikasjoner.defaultProps = {
  beskjeder: null,
  oppgaver: null,
  innbokser: null,
  erAktiv: false,
  erInaktiv: false,
};

export default Brukernotifikasjoner;
