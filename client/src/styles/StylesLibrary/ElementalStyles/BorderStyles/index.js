import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';

const { textBoxBorderColor, formDividerColor } = colorPalette;

export const borderStyles = {
  dark: {
    inputTextBoxBorder: `2px solid ${
      colorPalette.dark.textBox.textBoxBorderColor
    }`,
    formShortDivider: {
      formShortDividerBorder: `2px dashed ${
        colorPalette.dark.formShortDivider.formShortDividerBorderColor
      }`
    }
  },
  white: {
    inputTextBoxBorder: `2px solid ${
      colorPalette.white.textBox.textBoxBorderColor
    }`,
    formShortDivider: {
      formShortDividerBorder: `2px solid ${
        colorPalette.white.formShortDivider.formShortDividerBorderColor
      }`
    },
    PageContentContainer: {
      pageContentContainerBorder: `2px solid ${
        colorPalette.white.pageContentContainerBorderColor
      }`
    },
    inputButton: {
      inputButtonBorder: `1px solid ${
        colorPalette.white.inputButtonBorderColor
      }`
    }
  }
};
