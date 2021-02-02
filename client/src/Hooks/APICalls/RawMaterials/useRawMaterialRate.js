import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

import {
  useApplicationDispatch,
  useApplicationState
} from 'Context/ApplicationContext/ApplicationState.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

export const getRawMaterialRate = async userID => {
  const response = await axios.get(`/api/v1/rawMaterial/${userID}/rate`, {
    headers: { Authorization: `Bearer ${localStorage.token}` }
  });

  return response.data.data.data;
};

export default function useRawMaterialRate(userID) {
  const { sendStepStatusRequest } = useStepStatusRequest();

  //const { userID } = useApplicationState();

  const queryClient = useQueryClient();

  //console.log(queryClient.getQueryData('supplier'));

  const { data } = useQuery(
    ['RawMaterialRate', userID],
    () => getRawMaterialRate(userID),
    {
      // Refetch the data every second
      onSuccess: data => {
        sendStepStatusRequest(
          `${userID}`,
          `Raw Material rate fetched successfully for ${userID}`,
          'success'
        );
      }
    },
    {
      onError: () =>
        sendStepStatusRequest(
          `${userID}`,
          `Error in fetching raw Material rate for ${userID}`,
          'failure'
        )
    }
  );

  return { data };
}
