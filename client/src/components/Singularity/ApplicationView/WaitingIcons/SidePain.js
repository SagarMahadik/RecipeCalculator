import React, { Fragment, useEffect } from 'react';
import sidePainImage from 'img/piatto/icons/sidePain.gif';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles';
const SidePain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div
        style={{
          position: 'absolute',
          top: '350px',
          left: '150px'
        }}
      >
        <img src={sidePainImage} height="74px" width="115px" />
      </div>
    </Fragment>
  );
};

export default SidePain;
