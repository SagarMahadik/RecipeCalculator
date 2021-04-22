import axios from 'axios';
import { useQuery } from 'react-query';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

export default function useRecipes(userID) {
  const { sendStepStatusRequest } = useStepStatusRequest();

  const getRecipes = async userID => {
    if (userID === '') {
      return true;
    }
    const response = await axios.get(`/api/v1/recipe/${userID}`, {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    });

    return response.data.data.data;
  };

  const {
    data: recipeData,
    isSuccess: recipeFetchSuccess,
    isError,
    error
  } = useQuery(
    ['recipes', userID],
    () => getRecipes(userID),
    {
      onSuccess: data => {
        if (userID === '') {
          return true;
        } else {
          sendStepStatusRequest(
            `${userID}`,
            `Recipes fetched successfully for ${userID}`,
            'success'
          );
        }
      }
    },
    {
      onError: () =>
        sendStepStatusRequest(
          `${userID}`,
          `Error in fetching Recipe for ${userID}`,
          'failure'
        )
    }
  );

  return { recipeData, recipeFetchSuccess, isError, error };
}
