import React from 'react';
import {
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';

const FormSectionHading = props => {
  return (
    <>
      <FormHeadingText>
        <FormSectionHeadingTextContainer>
          {props.sectionName}
        </FormSectionHeadingTextContainer>
      </FormHeadingText>
    </>
  );
};

export default FormSectionHading;
