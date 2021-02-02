import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

import {
  useApplicationDispatch,
  useApplicationState
} from 'Context/ApplicationContext/ApplicationState.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

export default function useBasicRecipes(userID) {
  const { sendStepStatusRequest } = useStepStatusRequest();

  const getRawMaterialRate = async userID => {
    if (userID === '') {
      return true;
    }
    const response = await axios.get(`/api/v1/basicRecipe/${userID}`, {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    });

    return response.data.data.data;
  };

  const {
    data: basicRecipes,
    isSuccess: basicRecipeFetchSuccess,
    isError,
    error
  } = useQuery(
    ['basicRecipes', userID],
    () => getRawMaterialRate(userID),
    {
      // Refetch the data every second
      onSuccess: data => {
        sendStepStatusRequest(
          `${userID}`,
          `Basic Recipes fetched successfully for ${userID}`,
          'success'
        );
      }
    },
    {
      onError: () =>
        sendStepStatusRequest(
          `${userID}`,
          `Error in fetching basic Recipe for ${userID}`,
          'failure'
        )
    }
  );

  return { basicRecipes, basicRecipeFetchSuccess, isError, error };
}
