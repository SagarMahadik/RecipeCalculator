import React from 'react';

import AppStyleButton from 'components/Singularity/ApplicationView/FormElements/Inputs/AppStyleButton.js';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';

export default {
  title: 'Input box',
  argTypes: {
    text: { control: 'text', description: 'Input label' },
    id: { description: 'Input id used for testing purpose' },
    name: { description: 'Input name used to update state' },
    isError: {
      control: 'boolean',
      description: 'To check if the Field is missing'
    },
    requiredErrorText: {
      description: 'Error messge on missing field',
      control: 'text'
    },
    isValidationError: {
      control: 'boolean',
      description: 'To check if there is validation error'
    },
    validationErrorText: {
      description: 'Error message on validation error',
      control: 'text'
    },
    value: {
      description: 'Value entered by user',
      control: 'text'
    },
    onChange: {
      description: 'Toggles the selected state'
    }
  }
};

const Template = args => <StyledTextBoxLabel {...args} />;

export const StyledTextBox = Template.bind({});

StyledTextBox.args = {
  text: 'Email'
};
