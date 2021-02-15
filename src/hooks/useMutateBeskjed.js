import { useMutation, useQueryClient } from "react-query";
import { postDone } from "../api";
import { BESKJED_INAKTIV_URL, BESKJED_URL } from "../constants";

const useMutateBeskjed = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (beskjed) => {
      postDone({
        eventId: beskjed.eventId,
        uid: beskjed.uid,
      });
    },
    {
      onSuccess: (data, variables) => {
        queryClient.setQueryData(BESKJED_URL, (beskjeder) => {
          return beskjeder.filter((beskjed) => variables.uid !== beskjed.uid);
        });
        queryClient.setQueryData(BESKJED_INAKTIV_URL, (inaktiveBeskjeder) => {
          return [...inaktiveBeskjeder, variables];
        });
      },
    }
  );
};

export default useMutateBeskjed;
