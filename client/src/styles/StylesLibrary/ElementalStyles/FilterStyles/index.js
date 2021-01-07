import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';

const { bottomInnerShadowColor } = colorPalette;

export const filterStyles = {
  textBoxShadowEffect: `6px 6px 8px rgba(0, 0, 0, 0.5), inset -4px -4px 6px #8E865D, inset 4px 5px 6px rgba(0, 0, 0, 0.75)`,

  frameShadowEffect: `inset -2px -2px 8px #504B3E, 
  inset 4px 4px 8px 2px ${bottomInnerShadowColor}`,
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
  pageheading: {
    pageHeadingShadowEffect: `inset -2px -2px 8px #504B3E, 
  inset 4px 4px 8px 2px ${bottomInnerShadowColor}`,
    pageHeadingTextShadow:
      '-1px -2px 2px rgba(255, 255, 255, 0.25),2px 8px 8px rgba(0, 0, 0, 0.5)',
    pageHeadingTextFilter: 'blur(0.3px)'
  }
};
