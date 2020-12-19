import { useState, useCallback } from 'react';
import axios from '../../node_modules/axios/index';

export const useStepStatusRequest = () => {
  const [stepStatusError, setError] = useState();

  const sendStepStatusRequest = useCallback(
    async (
      userId,
      step,
      status,
      config = { headers: { 'Content-Type': 'application/JSON' } }
    ) => {
      const body = JSON.stringify({
        userId,
        step,
        status
      });

      console.log(body);

      const response = await axios.post('/api/v1/stepLogs', body, config);
      const responseData = response.data.data.data;
      return responseData;
    },
    []
  );

  return { sendStepStatusRequest, stepStatusError };
};
