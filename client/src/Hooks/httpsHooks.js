import { useState, useCallback } from 'react';
import axios from '../../node_modules/axios/index';

export const useHttpClient = () => {
  const [error, setError] = useState();

  const sendRequest = useCallback(async (url, body = null, headers = {}) => {
    const response = await axios.get(url);
    const responseData = response.data.data.data;
    return responseData;
  }, []);

  return { sendRequest, error };
};
