import React from 'react';
import ReactHowler from 'react-howler';

const DoneSound = ({ isComplete }) => {
  return (
    <div>
      <ReactHowler
        src="https://res.cloudinary.com/antilibrary/video/upload/v1605352982/pristine-609_bw5gcg.mp3"
        playing={isComplete}
      />
    </div>
  );
};

export default DoneSound;
