import styled from 'styled-components/macro';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';

export const PTSansText = styled.text`
  font-family: PT Sans;
  font-weight: normal;
  align-items: center;
  text-align: center;
`;

export const SacramentoText = styled.text`
  font-family: Sacramento;
  font-weight: normal;
  text-align: center;
`;

export const RobotoText = styled.text`
  font-family: Roboto;
  font-weight: normal;
  align-items: center;
  text-align: center;
  color: ${styles.formContentColor};
`;

export const RecursiveText = styled.text`
  font-family: Recursive;
  font-weight: normal;
  align-items: center;
  text-align: center;
  color: ${styles.formContentColor};
`;

export const AthitiText = styled.text`
  font-family: Athiti;
  font-weight: normal;
  align-items: center;
  text-align: center;
  color: ${styles.formContentColor};
`;

export const ComicText = styled.text`
  font-family: Athiti;
  font-weight: normal;
  align-items: center;
  text-align: center;
  color: ${styles.formContentColor};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductImageName = styled(PTSansText)`
  color: #000000;
  font-size: 16px;
  line-height: 12px;
  font-weight: bold;
`;

export const FormSectionHeadingTextContainer = styled(TextContainer)`
  margin-top: 0.8em;
  padding: 5px;
`;

export const PreviewaPageSectionHeader = styled(TextContainer)`
  margin-top: 0.5em;
`;

export const RadioButtonText = styled(PTSansText)`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${props =>
    props.selected ? `${styles.themecolor}` : `${styles.formContentColor}`};
`;

export const ButtonText = styled(SacramentoText)`
  font-size: 36px;
  color: ${styles.buttonTextColor};
`;

export const FormContentText = styled(PTSansText)`
  font-size: 18px;
  line-height: 16px;
  color: ${styles.formContentColor};
`;

export const FormHeadingText = styled(RecursiveText)`
  font-size: 22px;
  line-height: 33px;
  color: ${styles.formContentColor};
`;

export const ItemDescriptionText = styled(PTSansText)`
  font-size: 14px;
  line-height: 14px;
  color: ${props =>
    props.checked ? `${styles.themecolor}` : `${styles.formContentColor}`};
`;

export const ProductInformation = styled(PTSansText)`
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 14px;
  text-align: left;
  color: #665c5c;
`;

export const ProductInformationTextContainer = styled.div`
  width: 80%;
  padding: 10px;
`;
export const ProductIconDescription = styled(PTSansText)`
  font-size: 14px;
  line-height: 14px;
  color: #000000;
`;

export const PriceText = styled(PTSansText)`
  font-size: 16px;
  line-height: 14px;
  color: #000000;
`;

export const PriceTextContainer = styled(TextContainer)``;

export const ProductName = styled(PTSansText)`
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  color: #ffffff;
`;

export const GalleryProducctNameContainer = styled.div`
  display: flex;
  margin-top: -35px;
  z-index: 3;
`;

export const TaglineText = styled(SacramentoText)`
  color: ${styles.dMenuContentColor};
  font-size: 24px;
`;
