import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';

const { textBoxBorderColor, formDividerColor } = colorPalette;

export const borderStyles = {
  dark: {
    inputTextBoxBorder: `2px solid #503F3F`,
    formShortDivider: {
      formShortDividerBorder: `1px solid ${
        colorPalette.dark.formShortDivider.formShortDividerBorderColor
      }`
    },
    inputButton: {
      inputButtonSelectedBorder: '1px solid #9B6356'
    },
    resetButton: {
      resetButtonBorder: '1px solid  #6BD5E3'
    },
    PageContentContainer: {
      pageContentContainerBorder: `3px solid #503F3F`
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
    },
    resetButton: {
      resetButtonBorder: ' 2px solid #e8eced'
    }
  }
};
