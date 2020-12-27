import React from 'react';
import {
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';

import { ErrorText } from 'styles/Singularity/OwnerView/Authentication/index.js';

const FormSectionHading = ({
  isRequiredError,
  requiredErrorText,
  sectionName
}) => {
  return (
    <>
      <FormHeadingText>
        <FormSectionHeadingTextContainer>
          {sectionName}
          {isRequiredError ? (
            <ErrorText id="required-field-message">
              {requiredErrorText}
            </ErrorText>
          ) : null}
        </FormSectionHeadingTextContainer>
      </FormHeadingText>
    </>
  );
};

export default FormSectionHading;
