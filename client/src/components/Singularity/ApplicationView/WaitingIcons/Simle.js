import React, { Fragment } from 'react';
import Simleimage from 'img/piatto/icons/Simle.gif';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles';
const Simle = () => {
  return (
      <Fragment>
          <div style={{ position: 'absolute', top: '350px', left: '150px' }}>
          <img src={Simleimage} height="74px" width="115px" />
          </div>

      </Fragment>
  )
  
 
};

export default Simle;