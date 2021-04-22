import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';

const { bottomInnerShadowColor } = colorPalette;

export const filterStyles = {
  dark: {
    frameShadowEffect: `inset -2px -2px 8px #504B3E, inset 4px 4px 8px 2px #000000;`,
    pageHeading: {
      pageHeadingShadowEffect: `inset -2px -2px 8px #504B3E, 
  inset 4px 4px 8px 2px ${bottomInnerShadowColor}`,
      pageHeadingTextShadow:
        '-1px -2px 2px rgba(255, 255, 255, 0.25),2px 8px 8px rgba(0, 0, 0, 0.5)',
      pageHeadingTextFilter: 'blur(0.3px)'
    },
    textBox: {
      textBoxShadowEffect: `2px -2px 4px rgba(0, 0, 0, 0.5), 4px 4px 8px #000000, inset -3px -3px 4px rgba(255, 255, 255, 0.25), inset 3px 3px 4px rgba(0, 0, 0, 0.75)`
    },
    formShortDivider: {
      formShortDividerTransform: 'rotate(-0.22deg)'
    },
    submitButton: {
      submitButtonBoxShadow:
        ' 4px 4px 16px 5px #000000, -3px -2px 16px 4px rgba(255, 255, 255, 0.8)'
    },
    inputButton: {
      inputButtonBoxShadow: `inset -2px -2px 4px rgba(255, 255, 255, 0.25), inset 2px 2px 4px #000000`,
      inputButtonSelectedBoxShadow:
        '4px 4px 8px #000000, inset -2px -2px 2px rgba(255, 255, 255, 0.25), inset 2px 2px 3px #2F2F2F'
    },
    resetButton: {
      resetButtonLabelTextShadow: ' 4px 4px 4px 0px #000000 30%',
      resetButtonBoxShadow:
        'inset -4px -4px 6px rgba(0, 0, 0, 0.5), inset 4px 5px 6px rgba(0, 0, 0, 0.49)',
      resetButtonDropShadow: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
    },
    searchResult: {
      searchResultBoxShadow:
        '-2px -2px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.5)'
    },
    navigationCard: {
      navigationCardBoxShadow: '4px 4px 16px 5px rgba(0, 0, 0, 0.75)',
      navigationCardTextShadow: '2px 8px 8px rgba(0, 0, 0, 0.5)'
    }
  },
  white: {
    frameShadowEffect:
      '4px 4px 8px 2px rgba(0, 0, 0, 0.25), -4px -4px 16px 2px #FFFFFF, inset -2px -2px 8px 2px #FFFFFF, inset 4px 4px 8px 2px rgba(81, 78, 78, 0.5)',
    pageHeading: {
      pageHeadingTextShadow: '',
      pageHeadingTextFilter: '',
      pageHeadingShadowEffect: ''
    },
    textBox: {
      textBoxShadowEffect:
        '-4px -4px 8px #FFFFFF, 4px 4px 8px #B9BDCB, inset -4px -4px 6px #FFFFFF, inset 4px 5px 6px #C1C5D2'
    },
    formShortDivider: {
      formShortDividerBoxShadow:
        '-4px -4px 4px #ffffff, 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    submitButton: {
      submitButtonBoxShadow:
        '-4px -4px 8px #FFFFFF, 4px 4px 8px 2px rgba(0, 0, 0, 0.25)'
    },
    inputButton: {
      inputButtonBoxShadow: `inset -4px -4px 8px #FFFFFF, inset 4px 4px 8px rgba(0, 0, 0, 0.25)`,
      inputButtonSelectedBoxShadow:
        '-4px -4px 8px #FFFFFF, 4px 4px 8px 2px rgba(0, 0, 0, 0.25)'
    },
    resetButton: {
      resetButtonLabelTextShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)',
      resetButtonBoxShadow:
        'inset -4px -4px 6px #ffffff, inset 4px 5px 6px #c1c5d2',
      resetButtonDropShadow:
        'drop-shadow(-4px -4px 8px #ffffff), drop-shadow(4px 4px 8px #b9bdcb)'
    },
    searchResult: {
      searchResultBoxShadow:
        '-4px -4px 8px #FFFFFF, 4px 4px 8px 2px rgba(0, 0, 0, 0.25)'
    },
    navigationCard: {
      navigationCardBoxShadow:
        '-4px -4px 8px #FFFFFF, 4px 4px 8px 2px rgba(0, 0, 0, 0.25)',
      navigationCardTextShadow: ''
    }
  },

  inputButtonShadow: `4px 4px 4px rgba(0, 0, 0, 0.5),
  inset 0px 4px 4px rgba(0, 0, 0, 0.75)`,
  navigationCard: {
    navigationCardBoxShadow: '4px 4px 16px 5px rgba(0, 0, 0, 0.75)',
    navigationCardTextShadow: '2px 8px 8px rgba(0, 0, 0, 0.5)'
  },
  searchResults: {
    searchResultBoxShadow:
      '4px 4px 8px 2px rgba(0, 0, 0, 0.75),-2px -2px 8px 2px rgba(255, 255, 255, 0.5)'
  },
  formShortDivider: {
    formShortDividerTransform: 'rotate(-0.22deg)'
  },
  formSectionHeading: { formSectionHeadingTextShadow: ' 0 0 1px #ffffff' },
  pageheading: {}
};
