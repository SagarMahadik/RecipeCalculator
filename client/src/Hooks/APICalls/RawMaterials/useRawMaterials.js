import axios from 'axios';
import { useQuery } from 'react-query';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

export default function useRawMaterialRate(userID) {
  const { sendStepStatusRequest } = useStepStatusRequest();

  const getRawMaterialRate = async userID => {
    if (userID === '') {
      return true;
    } else {
      const response = await axios.get(`/api/v1/rawMaterial/${userID}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` }
      });

      return response.data.data.data;
    }
  };

  const {
    data: rawMaterialData,
    isSuccess: rawMaterialFetchSuccess,
    isError,
    error
  } = useQuery(
    ['RawMaterials', userID],
    () => getRawMaterialRate(userID),
    {
      onSuccess: data => {
        if (userID === '') {
          return true;
        } else {
          sendStepStatusRequest(
            `${userID}`,
            `Raw Materials fetched successfully for ${userID}`,
            'success'
          );
        }
      }
    },
    {
      onError: () =>
        sendStepStatusRequest(
          `${userID}`,
          `Error in fetching raw Material for ${userID}`,
          'failure'
        )
    },
    { staleTime: 10000 }
  );

  return { rawMaterialData, rawMaterialFetchSuccess, isError, error };
}
