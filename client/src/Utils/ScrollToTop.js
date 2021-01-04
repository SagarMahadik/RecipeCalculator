import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import {
  applicationContext,
  applicationDispatchContext
} from 'Context/ApplicationContext/applicationContext.js';

import { useLocation } from 'react-router-dom';

function ScrollToTop({ history }) {
  const ApplicationContext = useContext(applicationContext);
  const { loadUser } = ApplicationContext;

  useEffect(() => {
    loadUser();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    console.log('in a scroll');
    console.log(window.scrollY);
    console.log(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
