import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import axios from 'axios';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

import { useQueryClient, useMutation } from 'react-query';

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
        //queryClient.refetchQueries(['supplier', userID]);
        console.log(queryClient.getQueryData(['supplier', userID]));
        if (queryClient.getQueryData(['supplier', userID])) {
          console.log(queryClient.getQueryData(['supplier', userID]));
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
