import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';

const {
  bottomInnerShadowColor,
  topInnerShadowColor,
  inputButtonShadowColor
} = colorPalette;

export const filterStyles = {
  textBoxShadowEffect: `inset -4px -4px 6px ${topInnerShadowColor}, 
  inset 4px 5px 6px ${bottomInnerShadowColor}`,

  frameShadowEffect: `inset -2px -2px 8px #504B3E, 
  inset 4px 4px 8px 2px ${bottomInnerShadowColor}`,
  inputButtonShadow: `0px 4px 4px 0px ${inputButtonShadowColor} inset`
};
