import React from 'react';
import ReactHowler from 'react-howler';

const SuccessSound = ({ isSuccessful }) => {
  return (
    <div>
      <ReactHowler
        src="https://res.cloudinary.com/antilibrary/video/upload/v1609532387/goes-without-saying-608_x8zyrl.mp3"
        playing={isSuccessful}
      />
    </div>
  );
};

export default SuccessSound;
