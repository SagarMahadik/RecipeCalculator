import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

import { useQueryClient, useMutation } from 'react-query';

import axios from 'axios';
export default function useCreateSupplier() {
  const { sendStepStatusRequest } = useStepStatusRequest();
  const { userID } = useApplicationState();

  const queryClient = useQueryClient();

  const createSupplier = async body => {
    console.log(body);

    const config = {
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: `Bearer ${localStorage.token}`
      }
    };
    try {
      const res = await axios.post(`/api/v1/supplier/${userID}`, body, config);
      return res.data.data.data;
    } catch (err) {
      sendStepStatusRequest(
        `${userID}`,
        `Supplier creation failed for ${userID}`,
        'failure'
      );
      throw new Error('There was an error creating supplier');
    }
  };

  const { mutateAsync, isError, error, status, isSuccess } = useMutation(
    createSupplier,
    {
      onSuccess: newSupplier => {
        if (queryClient.getQueryData(['supplier', userID])) {
          queryClient.setQueryData(['supplier', userID], current => [
            ...current,
            newSupplier
          ]);
        }
        queryClient.invalidateQueries(['supplier', userID]);

        sendStepStatusRequest(
          `${userID}`,
          `Supplier created successfully for ${userID}`,
          'success'
        );
      }
    },
    {
      onError: () =>
        sendStepStatusRequest(
          `${userID}`,
          `Supplier creation failed for ${userID}`,
          'failure'
        )
    }
  );

  return { mutateAsync, isError, error, status, isSuccess };
}
