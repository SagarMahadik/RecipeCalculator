import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette/index.js';
import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles/index.js';
import { borderStyles } from 'styles/StylesLibrary/ElementalStyles/BorderStyles/index.js';

const {
  white: {
    pageBackgroundColor,
    pageheading: { pageHeadingBackgroundColor, pageHeadingTextColor },
    textBox: {
      textBoxBackgroundColor,
      textBoxTextColor,
      textBoxBorderColor,
      labelTextColor
    },

    formSectionHeading: { formSectionHeadingTextColor },
    submitButton: {
      submitButtonBackgroundColor,
      submitButtonBorderColor,
      submitButtonLabelTextColor
    },
    inputButton: {
      inputButtonBackground,
      inputButtonBorderColor,
      inputButtonLabelBackgound,
      inputButtonSelectedBackground,
      inputButtonSelectedLabelTextColor
    },
    searchResults: { searchResultContainerBackgroundColor, searchResultColor },
    navigationCard: { navigationCardBorderColor }
  }
} = colorPalette;

const {
  white: {
    frameShadowEffect,
    pageHeading: {
      pageHeadingShadowEffect,
      pageHeadingTextShadow,
      pageHeadingTextFilter
    },
    textBox: { textBoxShadowEffect },
    formShortDivider: { formShortDividerBoxShadow },
    submitButton: { submitButtonBoxShadow },
    inputButton: { inputButtonBoxShadow, inputButtonSelectedBoxShadow },
    searchResult: { searchResultBoxShadow },
    navigationCard: { navigationCardBoxShadow, navigationCardTextShadow }
  }
} = filterStyles;

const {
  white: {
    inputTextBoxBorder,
    formShortDivider: { formShortDividerBorder },
    PageContentContainer: { pageContentContainerBorder },
    inputButton: { inputButtonBorder }
  }
} = borderStyles;

export const whiteTheme = {
  details: {
    themeName: 'white'
  },
  colors: {
    pageBackgroundColor: `${pageBackgroundColor}`,
    pageHeadingBackgroundColor,
    pageHeadingTextColor,
    textBoxBackgroundColor,
    textBoxTextColor,
    textBoxBorderColor,
    labelTextColor,
    formSectionHeadingTextColor,
    submitButtonBackgroundColor,
    submitButtonBorderColor,
    submitButtonLabelTextColor,
    inputButtonBackground,
    inputButtonBorderColor,
    inputButtonLabelBackgound,
    inputButtonSelectedBackground,
    inputButtonSelectedLabelTextColor,
    searchResultContainerBackgroundColor,
    searchResultColor,
    navigationCardBorderColor
  },
  filters: {
    frameShadowEffect,
    pageHeadingShadowEffect,
    pageHeadingTextShadow,
    pageHeadingTextFilter,
    textBoxShadowEffect,
    formShortDividerBoxShadow,
    submitButtonBoxShadow,
    inputButtonBoxShadow,
    inputButtonSelectedBoxShadow,
    searchResultBoxShadow,
    navigationCardBoxShadow,
    navigationCardTextShadow
  },
  borders: {
    inputTextBoxBorder,
    formShortDividerBorder,
    pageContentContainerBorder,
    inputButtonBorder
  }
};