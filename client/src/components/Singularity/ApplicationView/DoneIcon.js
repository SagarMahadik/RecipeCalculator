import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import DoneIconImage from 'img/piatto/ok-hand.gif';

function DoneIcon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div style={{ position: 'absolute', top: '250px', left: '150px' }}>
        <img src={DoneIconImage} style={{ height: '100px', width: '100px' }} />
      </div>
    </Fragment>
  );
}

export default DoneIcon;
