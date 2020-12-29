import React from 'react';
import {
  RadioButtonText,
  TextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
import { TextRadioButton } from 'styles/Singularity/Style1.0/FormInputStyles';

import PropTypes from 'prop-types';

const StyledRadioButton = ({ value, selected, onClick, display }) => {
  return (
    <>
      <TextRadioButton value={value} selected={selected} onClick={onClick}>
        <RadioButtonText selected={selected}>
          <TextContainer>{display}</TextContainer>
        </RadioButtonText>
      </TextRadioButton>
    </>
  );
};

export default StyledRadioButton;

StyledRadioButton.propTypes = {
  value: PropTypes.string,
  selected: PropTypes.bool,
  display: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

StyledRadioButton.defaultProps = {
  value: null,
  selected: false,
  display: null,
  onClick: undefined
};
