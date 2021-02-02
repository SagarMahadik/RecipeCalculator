import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

import {
  useApplicationDispatch,
  useApplicationState
} from 'Context/ApplicationContext/ApplicationState.js';

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
    data: appRecipes,
    isSuccess: recipeFetchSuccess,
    isError,
    error
  } = useQuery(
    ['recipes', userID],
    () => getRecipes(userID),
    {
      // Refetch the data every second
      onSuccess: data => {
        sendStepStatusRequest(
          `${userID}`,
          `Recipes fetched successfully for ${userID}`,
          'success'
        );
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

  return { appRecipes, recipeFetchSuccess, isError, error };
}
