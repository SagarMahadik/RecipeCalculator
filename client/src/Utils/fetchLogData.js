import { useHttpClient } from 'Hooks/httpsHooks';
import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

const { sendRequest } = useHttpClient();
const { sendStepStatusRequest } = useStepStatusRequest();

export const getData = async (url, typeString, module) => {
  try {
    let res = await sendRequest(url);

    dispatch({
      type: `${typeString}`,
      payload: res
    });

    sendStepStatusRequest(
      `${userID}`,
      `Successfully fecthed ${module} data for ${userID}`,
      'success'
    );
  } catch (err) {
    sendStepStatusRequest(
      `${userID}`,
      `Fetching ${module} data failed for ${userID}`,
      'failure'
    );
  }
};
