import React, { Fragment } from 'react';
import sleepyimage from 'img/piatto/icons/Sleepy.gif';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles';
const Sleepy = () => {
  return (
    <Fragment>
       <div style={{ position: 'absolute', top: '350px', left: '150px' }}>
       <img src={sleepyimage} height="74px" width="115px" />
       </div>
    </Fragment>
  ) 
};

export default Sleepy;