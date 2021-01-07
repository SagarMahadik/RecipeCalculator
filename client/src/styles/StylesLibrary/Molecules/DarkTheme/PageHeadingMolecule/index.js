import React from 'react';
import Logo from 'components/Singularity/ApplicationView/Logo';

import {
  PageHeadingText,
  PageHeadingsContainer
} from 'styles/StylesLibrary/Atoms/PageheadingElements/index.js';
import DeleteIcon from 'components/Singularity/ApplicationView/Icons/DeleteIcon.js';

const PageHeading = () => {
  return (
    <PageHeadingsContainer>
      <Logo height={'90px'} width={'90px'} />
      <PageHeadingText>Raw Material Details</PageHeadingText>
      <DeleteIcon />
    </PageHeadingsContainer>
  );
};

export default PageHeading;
