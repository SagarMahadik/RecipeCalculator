import axios from 'axios';
import { useQuery } from 'react-query';

import {
  useApplicationDispatch,
  useApplicationState
} from 'Context/ApplicationContext/ApplicationState.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

export const getSupplierData = async userID => {
  try {
    const response = await axios.get(`/api/v1/supplier/${userID}`, {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    });
    return response.data.data.data;
  } catch (error) {
    throw new Error('There was an error!');
  }
};

export default function useSupplier() {
  const { userID } = useApplicationState();

  const dispatch = useApplicationDispatch();

  const { sendStepStatusRequest } = useStepStatusRequest();

  const { data, status, isError, error } = useQuery(
    ['supplier', userID],
    () => getSupplierData(userID),
    {
      onSuccess: data => {
        sendStepStatusRequest(
          `${userID}`,
          `Supplier fetched successfully for ${userID}`,
          'success'
        );
        dispatch({ type: 'SET_SUPPLIERDETAILS', payload: data });
      }
    },
    {
      onError: () =>
        sendStepStatusRequest(
          `${userID}`,
          `Error in fetching suppliers for ${userID}`,
          'failure'
        )
    }
  );

  return { data, status, isError, error };
}
