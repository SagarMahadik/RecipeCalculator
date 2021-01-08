import React, { useState, useEffect } from 'react';
import Logo from 'components/Singularity/ApplicationView/Logo';

import {
  PageHeadingText,
  PageHeadingsContainer
} from 'styles/StylesLibrary/Atoms/PageheadingElements/index.js';
import DeleteIcon from 'components/Singularity/ApplicationView/Icons/DeleteIcon.js';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

const PageHeading = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const dispatch = useApplicationDispatch();

  useEffect(() => {
    if (isDarkTheme) {
      dispatch({
        type: 'SET_THEME',
        payload: 'dark'
      });
    } else {
      dispatch({
        type: 'SET_THEME',
        payload: 'white'
      });
    }
  }, [isDarkTheme]);

  return (
    <PageHeadingsContainer>
      <Logo height={'90px'} width={'90px'} />
      <PageHeadingText>Raw Material Details</PageHeadingText>
      <DeleteIcon onClick={() => setDarkTheme(!isDarkTheme)} />
    </PageHeadingsContainer>
  );
};

export default PageHeading;
