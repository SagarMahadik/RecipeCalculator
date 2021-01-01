import { isError } from 'lodash';
import React from 'react';
import ReactHowler from 'react-howler';

const DoneSound = ({ isError }) => {
  return (
    <div>
      <ReactHowler
        src="https://res.cloudinary.com/antilibrary/video/upload/v1609530976/i-demand-attention-244_p7lk6v.mp3"
        playing={isError}
      />
    </div>
  );
};

export default DoneSound;
