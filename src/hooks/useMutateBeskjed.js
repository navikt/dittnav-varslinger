import { useMutation, useQueryClient } from "react-query";
import { postDone } from "../api";
import { beskjedUrl, inaktivBeskjedUrl } from "../utils/lenker";

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
        queryClient.setQueryData(beskjedUrl, (beskjeder) => {
          return beskjeder.filter((beskjed) => variables.uid !== beskjed.uid);
        });
        queryClient.setQueryData(inaktivBeskjedUrl, (inaktiveBeskjeder) => {
          return [...inaktiveBeskjeder, variables];
        });
      },
    }
  );
};

export default useMutateBeskjed;
