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
    resetButton: { resetButtonLabelColor, resetButtonBackgroundColor },
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
    resetButton: {
      resetButtonLabelTextShadow,
      resetButtonBoxShadow,
      resetButtonDropShadow
    },
    searchResult: { searchResultBoxShadow },
    navigationCard: { navigationCardBoxShadow, navigationCardTextShadow }
  }
} = filterStyles;

const {
  white: {
    inputTextBoxBorder,
    formShortDivider: { formShortDividerBorder },
    PageContentContainer: { pageContentContainerBorder },
    inputButton: { inputButtonBorder },
    resetButton: { resetButtonBorder }
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
    navigationCardBorderColor,
    resetButtonLabelColor,
    resetButtonBackgroundColor
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
    resetButtonLabelTextShadow,
    resetButtonBoxShadow,
    resetButtonDropShadow,
    searchResultBoxShadow,
    navigationCardBoxShadow,
    navigationCardTextShadow
  },
  borders: {
    inputTextBoxBorder,
    formShortDividerBorder,
    pageContentContainerBorder,
    inputButtonBorder,
    resetButtonBorder
  }
};
