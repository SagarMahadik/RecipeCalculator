import { useState, useCallback } from 'react';
import axios from 'axios';

export const useAuthRequest = () => {
  const [authError, setauthError] = useState();

  const sendAuthRequest = useCallback(
    async (url, body, headers = { 'Content-Type': 'application/JSON' }) => {
      try {
        const response = await axios.post(url, body, headers);
        const responseData = response.data.data.user;
        return responseData;
      } catch (authError) {
        setauthError(authError.response);
      }
    },
    []
  );

  return { sendAuthRequest, authError };
};
