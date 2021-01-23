import React, { useEffect, useContext } from 'react';
import { applicationContext } from 'Context/ApplicationContext/applicationContext.js';

import { useLocation } from 'react-router-dom';

function ScrollToTop({ history }) {
  const ApplicationContext = useContext(applicationContext);
  const { loadUser } = ApplicationContext;

  useEffect(() => {
    loadUser();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
