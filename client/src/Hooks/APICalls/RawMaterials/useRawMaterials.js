import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

import {
  useApplicationDispatch,
  useApplicationState
} from 'Context/ApplicationContext/ApplicationState.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

export default function useRawMaterialRate(userID) {
  // const dispatch = useApplicationDispatch();

  const { sendStepStatusRequest } = useStepStatusRequest();

  //const { userID } = useApplicationState();

  //const userID = 9921514875;

  const getRawMaterialRate = async userID => {
    console.log(userID);
    if (userID === '') {
      return true;
    } else {
      //dispatch({ type: 'SET_RAWMATERIALS', payload: [] });
      const response = await axios.get(`/api/v1/rawMaterial/${userID}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` }
      });

      return response.data.data.data;
    }
  };

  //console.log(queryClient.getQueryData('supplier'));

  const {
    data: rawMaterials,
    isSuccess: rawMaterialFetchSuccess,
    isError,
    error
  } = useQuery(
    ['RawMaterials', userID],
    () => getRawMaterialRate(userID),
    {
      // Refetch the data every second
      onSuccess: data => {
        sendStepStatusRequest(
          `${userID}`,
          `Raw Materials fetched successfully for ${userID}`,
          'success'
        );
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

  return { rawMaterials, rawMaterialFetchSuccess, isError, error };
}
