import axios from 'axios';
import { useQuery } from 'react-query';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

export const getRawMaterialRate = async userID => {
  if (userID === '') {
    return true;
  }
  const response = await axios.get(`/api/v1/rawMaterial/${userID}/rate`, {
    headers: { Authorization: `Bearer ${localStorage.token}` }
  });

  return response.data.data.data;
};

export default function useRawMaterialRate(userID) {
  const { sendStepStatusRequest } = useStepStatusRequest();

  const { data } = useQuery(
    ['RawMaterialRate', userID],
    () => getRawMaterialRate(userID),
    {
      onSuccess: data => {
        if (userID === '') {
          return true;
        } else {
          sendStepStatusRequest(
            `${userID}`,
            `Raw Material rate fetched successfully for ${userID}`,
            'success'
          );
        }
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
