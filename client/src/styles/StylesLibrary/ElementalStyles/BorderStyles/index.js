import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';

const { textBoxBorderColor, formDividerColor } = colorPalette;

export const borderStyles = {
  inputTextBoxBorder: `2px solid ${textBoxBorderColor}`,
  formShortDivider: {
    formShortDividerBorder: `2px dashed ${formDividerColor}`
  }
};
