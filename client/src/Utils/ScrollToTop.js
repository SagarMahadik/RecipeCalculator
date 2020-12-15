import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';

function ScrollToTop({ history }) {
  const ApplicationContext = useContext(applicationContext);
  const { loadUser } = ApplicationContext;

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
