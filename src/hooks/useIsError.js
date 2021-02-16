import { useQuery } from "react-query";
import { fetcher } from "../api";
import {
  beskjedUrl,
  inaktivBeskjedUrl,
  inaktivOppgaveUrl,
  innaktivInnboksUrl,
  innboksUrl,
  oppgaveUrl,
} from "../utils/lenker";

const useIsError = () => {
  const { isError: isErrorBeskjeder } = useQuery(beskjedUrl, fetcher);
  const { isError: isErrorOppgaver } = useQuery(oppgaveUrl, fetcher);
  const { isError: isErrorInnbokser } = useQuery(innboksUrl, fetcher);
  const { isError: isErrorInaktiveBeskjeder } = useQuery(inaktivBeskjedUrl, fetcher);
  const { isError: isErrorInaktiveOppgaver } = useQuery(inaktivOppgaveUrl, fetcher);
  const { isError: isErrorInaktiveInnbokser } = useQuery(innaktivInnboksUrl, fetcher);

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
