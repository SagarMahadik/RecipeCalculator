import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette/index.js';
import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles/index.js';
import { borderStyles } from 'styles/StylesLibrary/ElementalStyles/BorderStyles/index.js';

const {
  dark: {
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
      inputButtonBorderBackground,
      inputButtonLabelBackgound,
      inputButtonShadowColor,
      inputButtonSelectedBackground,
      inputButtonSelectedBorderBackground,
      inputButtonSelectedLabelTextColor
    },
    searchResults: { searchResultContainerBackgroundColor, searchResultColor },
    navigationCard: { navigationCardBorderColor }
  }
} = colorPalette;

const {
  dark: {
    frameShadowEffect,
    pageHeading: {
      pageHeadingShadowEffect,
      pageHeadingTextShadow,
      pageHeadingTextFilter
    },
    textBox: { textBoxShadowEffect },
    formShortDivider: { formShortDividerTransform },
    submitButton: { submitButtonBoxShadow },
    inputButton: { inputButtonBoxShadow },
    searchResult: { searchResultBoxShadow },
    navigationCard: { navigationCardBoxShadow, navigationCardTextShadow }
  }
} = filterStyles;

const {
  dark: {
    inputTextBoxBorder,
    formShortDivider: { formShortDividerBorder }
  }
} = borderStyles;

export const darkTheme = {
  details: {
    themeName: 'dark'
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
    inputButtonBorderBackground,
    inputButtonLabelBackgound,
    inputButtonShadowColor,
    inputButtonSelectedBackground,
    inputButtonSelectedBorderBackground,
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
    formShortDividerTransform,
    submitButtonBoxShadow,
    inputButtonBoxShadow,
    searchResultBoxShadow,
    navigationCardBoxShadow,
    navigationCardTextShadow
  },
  borders: {
    inputTextBoxBorder,
    formShortDividerBorder
  }
};
