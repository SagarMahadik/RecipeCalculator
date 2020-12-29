import React from 'react';

import AppStyleButton from 'components/Singularity/ApplicationView/FormElements/Inputs/AppStyleButton.js';
import StyledRadioButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledRadioButton.js';

export default {
  title: 'Category Button',
  argTypes: {
    display: { control: 'text', description: 'Text to be displayed on button' },
    selected: {
      control: 'boolean',
      description: 'To know whether button is selected'
    },
    value: {
      description: 'Value of the button to be used in State'
    },
    onClick: {
      description: 'Toggles the selected state'
    }
  }
};

const Template = args => <StyledRadioButton {...args} />;

export const SelectedCategoryButton = Template.bind({});

export const UnselectedCategoryButton = Template.bind({});

SelectedCategoryButton.args = {
  selected: true,
  display: 'Breakfast'
};

UnselectedCategoryButton.args = {
  selected: false,
  display: 'Pasta'
};
