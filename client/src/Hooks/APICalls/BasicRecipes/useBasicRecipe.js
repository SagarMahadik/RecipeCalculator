import axios from 'axios';
import { useQuery } from 'react-query';

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
    data: basicRecipesData,
    isSuccess: basicRecipeFetchSuccess,
    isError,
    error
  } = useQuery(
    ['basicRecipes', userID],
    () => getRawMaterialRate(userID),
    {
      onSuccess: data => {
        if (userID === '') {
          return true;
        } else {
          sendStepStatusRequest(
            `${userID}`,
            `Basic Recipes fetched successfully for ${userID}`,
            'success'
          );
        }
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

  return { basicRecipesData, basicRecipeFetchSuccess, isError, error };
}
