import styled from 'styled-components';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';
import { fontStyles } from 'styles/StylesLibrary/ElementalStyles/FontStyles';
import { borderStyles } from 'styles/StylesLibrary/ElementalStyles/BorderStyles/index.js';
import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles/index.js';

const {
  formSectionHeadingTextFont,
  formSectionHeadingTextSize,
  formSectionHeadingTextLineHeight
} = fontStyles;

const { formSectionHeadingTextColor } = colorPalette;

const {
  formShortDivider: { formShortDividerBorder }
} = borderStyles;

const {
  formShortDivider: { formShortDividerTransform },
  formSectionHeading: { formSectionHeadingTextShadow }
} = filterStyles;

export const FormSectionHeadingText = styled.h6`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: ${formSectionHeadingTextFont};
  font-style: normal;
  font-weight: normal;
  font-size: ${formSectionHeadingTextSize};
  line-height: ${formSectionHeadingTextLineHeight};
  text-shadow: ${formSectionHeadingTextShadow};
  color: ${formSectionHeadingTextColor};
`;

export const FormShortDividerBorder = styled.div`
  width: 70%;
  border: ${formShortDividerBorder};
  transform: ${formShortDividerTransform};
`;
