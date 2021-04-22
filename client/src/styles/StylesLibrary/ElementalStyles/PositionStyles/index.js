import styled from 'styled-components/macro';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';

import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles';

const { frameShadowEffect } = filterStyles;
const { pageBackgroundColor } = colorPalette;

export const RowContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: auto;
  flex-wrap: wrap;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: auto;
  border-radius: 5px;
`;

export const LeftAlignedColumnGridContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CenterAlignedColumnGridContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

export const CenterAlignedColumnContainer = styled(ColumnContainer)`
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.marginTop};
`;

export const CenterFlexStartAlignedColumnContainer = styled(ColumnContainer)`
  align-items: center;
  align-content: flex-start;
`;

export const LeftAlignedColumnContainer = styled(ColumnContainer)`
  align-items: flex-start;
`;

export const PageContentContainer = styled(CenterAlignedColumnContainer)`
  width: 94%;
  margin: 12px;
  background-color: ${({ theme: { colors } }) => colors.pageBackgroundColor};
  box-shadow: ${({ theme: { filters } }) => filters.frameShadowEffect};
  padding-bottom: 2em;
  border: ${({ theme: { borders } }) => borders.pageContentContainerBorder};
  background: url('https://res.cloudinary.com/antilibrary/image/upload/v1612561378/MattBackground_zcz2ma.jpg')
    repeat;
`;

export const CenterAlignedColumnContainerWithShadowBackground = styled(
  CenterAlignedColumnContainer
)`
  background-color: ${({ theme: { colors } }) => colors.pageBackgroundColor};
  box-shadow: ${({ theme: { filters } }) => filters.frameShadowEffect};
  margin: auto;
`;

export const CenterAlignedColumnContainerWOShadowBackground = styled(
  CenterAlignedColumnContainer
)`
  background-color: 'none';
  box-shadow: 'none';
  margin: auto;
`;

export const FormOptionButtonContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-evenly;
  overflow-y: auto;
  padding: 1em;
  @media (min-width: 765px) {
    width: 60%;
  }
`;

export const FormSectionHeadingContainer = styled(
  CenterAlignedColumnContainerWOShadowBackground
)`
  height: 54px;
  margin-bottom: 1em;
  margin-top: 1em;
`;

export const FormShortDividerContainer = styled(
  CenterAlignedColumnContainerWOShadowBackground
)`
  margin-top: 1.5em;
`;

export const LoginPageContainer = styled(CenterFlexStartAlignedColumnContainer)`
  width: 94%;
  margin: 14px;
  margin-top: 5px;

  background: linear-gradient(
      168.1deg,
      rgba(231, 104, 106, 0.25) 14.69%,
      rgba(255, 255, 255, 0) 74.41%
    ),
    #e7eaef;
  box-shadow: ${({ theme: { filters } }) => filters.frameShadowEffect};

  border: ${({ theme: { borders } }) => borders.pageContentContainerBorder};
`;

export const LogoTagLineContainer = styled(
  CenterFlexStartAlignedColumnContainer
)`
  padding: 4px;

  @media (min-width: 375px) {
    margin-top: 86px;
  }
  @media (min-width: 765px) and (max-width: 1200px) {
    margin-top: 30px;
  }
`;

export const QuoteContainer = styled(CenterFlexStartAlignedColumnContainer)`
  margin-top: 18vh;
  height: 40vh;
  background: linear-gradient(
    120.95deg,
    #e7eaef -0.26%,
    rgba(231, 147, 150, 0.354127) 205.88%,
    rgba(231, 121, 123, 0.16) 267.84%
  );
  border: 1px solid #e7eaef;
  box-sizing: border-box;
  box-shadow: inset -4px -4px 8px #ffffff, inset 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 25px 25px 0px 0px;
  @media (min-width: 765px) and (max-width: 1200px) {
    margin-top: 8vh;
    height: 22vh;
  }
`;
