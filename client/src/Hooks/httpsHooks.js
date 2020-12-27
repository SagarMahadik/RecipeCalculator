import { useState, useCallback } from 'react';
import axios from '../../node_modules/axios/index';

import setAuthToken from 'Utils/setAuthToken';

export const useHttpClient = () => {
  const [error, setError] = useState();

  const sendRequest = useCallback(async (url, body = null) => {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    });
    const responseData = response.data.data.data;
    return responseData;
  }, []);

  return { sendRequest, error };
};
