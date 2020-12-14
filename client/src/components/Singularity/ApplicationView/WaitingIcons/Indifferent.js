import React, { Fragment } from 'react';
import Indifferentimage from 'img/piatto/icons/Indeifferent.gif';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles';
const Indifferent = () => {
  return (

    <Fragment>
      <div style={{ position: 'absolute', top: '350px', left: '150px' }}>
      <img src={Indifferentimage} height="74px" width="115px" />
      </div>
    </Fragment>
  )

};

export default Indifferent;