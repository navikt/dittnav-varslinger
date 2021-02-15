import { useQuery } from "react-query";
import {
  BESKJED_INAKTIV_URL,
  BESKJED_URL,
  INNBOKS_INAKTIV_URL,
  INNBOKS_URL,
  OPPGAVE_INAKTIV_URL,
  OPPGAVE_URL,
} from "../constants";
import { fetcher } from "../api";

const useIsError = () => {
  const { isError: isErrorBeskjeder } = useQuery(BESKJED_URL, fetcher);
  const { isError: isErrorOppgaver } = useQuery(OPPGAVE_URL, fetcher);
  const { isError: isErrorInnbokser } = useQuery(INNBOKS_URL, fetcher);
  const { isError: isErrorInaktiveBeskjeder } = useQuery(BESKJED_INAKTIV_URL, fetcher);
  const { isError: isErrorInaktiveOppgaver } = useQuery(OPPGAVE_INAKTIV_URL, fetcher);
  const { isError: isErrorInaktiveInnbokser } = useQuery(INNBOKS_INAKTIV_URL, fetcher);

  return (
    isErrorBeskjeder ||
    isErrorOppgaver ||
    isErrorInnbokser ||
    isErrorInaktiveBeskjeder ||
    isErrorInaktiveOppgaver ||
    isErrorInaktiveInnbokser
  );
};

export default useIsError;
