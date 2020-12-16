import styled from 'styled-components/macro';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';
import { Link } from 'react-router-dom';
import {
  CenterAlignedColumnContainer,
  RowContainer,
  LeftAlignedRowContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  PTSansText,
  SacramentoText,
  ComicText
} from 'styles/Singularity/Style1.0/TextStyles';

export const BackgroundImage = styled.img`
  width: 100%;
  height: 426px;
  object-fit: cover;
  filter: blur(1px);
`;

export const LandingPageContainer = styled(CenterAlignedColumnContainer)`
  width: 100%;
  height: 100vh;
`;

export const LogoContainer = styled(CenterAlignedColumnContainer)`
  margin-top: -50px;
  background: none;
  z-index: 2;
`;

export const LoginContainer = styled(CenterAlignedColumnContainer)`
  margin-top: -120px;
`;

export const RegisterText = styled(ComicText)`
  font-size: 14px;
  text-decoration: underline;
  font-weight: bold;
  color: ${styles.formContentColor};
`;

export const RegisterLink = styled(Link)`
  margin-top: 10px;
`;
