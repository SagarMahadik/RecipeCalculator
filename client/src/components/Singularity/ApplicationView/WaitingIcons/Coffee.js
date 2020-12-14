import React, { Fragment } from 'react';
import coffeImage from 'img/piatto/icons/coffee.gif';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles';
const Coffee = () => {
  return (
    <Fragment>
    <div style={{ position: 'absolute', top: '350px', left: '150px' }}>
    <img src={coffeImage} height="74px" width="115px"  />
    </div>
    </Fragment>
  );


}

export default Coffee;
