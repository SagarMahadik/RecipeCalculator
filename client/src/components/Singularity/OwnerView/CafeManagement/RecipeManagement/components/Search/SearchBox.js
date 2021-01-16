import React from 'react';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';

const SearchBox = ({ value, onChange }) => {
  return <StyledTextBoxLabel value={value} onChange={onChange} />;
};

export default SearchBox;
