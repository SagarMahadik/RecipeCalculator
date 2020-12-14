import styled from 'styled-components/macro';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';

import { keyframes, css } from 'styled-components';

import { WobbleTop } from 'styles/Singularity/Style1.0/Animations';

export const TextBox = styled.input`
  display: flex;
  width: 100%;
  height: 2.5em;
  border-radius: 5px;
  border: none;
  color: ${styles.formContentColor};
  background: ${styles.backgroundGradient};
  margin-top: ${props => props.marginTop || '1.5em'};
  box-sizing: border-box;
  transition: border-width 0.6s linear;
  filter: drop-shadow(0px 4px 4px rgba(176, 167, 229, 0.5));
  &:focus {
    outline: none;
    border: 2px solid #6e5dcc;
  }
`;

export const InputLabel = styled.label`
  width: 73px;
  height: auto;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #daa520;
`;

export const LabelText = styled.label`
  position: absolute;
  top: 1.6em;
  left: 0.5em;
  font-size: 18px;
  line-height: 16px;
  pointer-events: none;
  transition: 0.6s;
  color: ${styles.formContentColor};
  ${TextBox}:focus ~ &,
  ${TextBox}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
    font-weight: bold;
  }
`;

export const TextParagraph = styled.textarea`
  display: flex;
  width: 100%;
  height: 7em;
  border-radius: 5px;
  border: none;
  text-align: left;
  appearance: none;
  box-sizing: border-box;
  color: ${styles.formContentColor};
  background: ${styles.backgroundGradient};
  margin-top: ${props => props.marginTop || '1.5em'};
  transition: border-width 0.6s linear;
  &:focus {
    outline: none;
    border: 2px solid #6e5dcc;
  }
`;

export const LabelText1 = styled.label`
  position: absolute;
  top: 1.6em;
  left: 0.5em;
  font-size: 18px;
  line-height: 16px;
  pointer-events: none;
  transition: 0.5s;
  color: ${styles.formContentColor};
  ${TextParagraph}:focus ~ &,
  ${TextParagraph}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
    font-weight: bold;
  }
`;

export const LabelTextParagraph = styled.label`
  position: absolute;
  top: 1.6em;
  left: 0.5em;
  font-size: 18px;
  line-height: 16px;
  pointer-events: none;
  transition: 0.5s;
  color: ${styles.formContentColor};
  ${TextParagraph}:focus ~ &,
  ${TextParagraph}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
    font-weight: bold;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 60%;
  margin-top: 0.8em;
`;

export const CrossSellPitch = styled(TextParagraph)``;

export const Proteins = styled(TextBox)``;
export const Carbohydrates = styled(TextBox)``;
export const Calories = styled(TextBox)``;
export const Fats = styled(TextBox)``;

export const ProteinsLabel = styled(LabelText)`
  ${Proteins}:focus ~ &,
  ${Proteins}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
  }
`;

export const CarbohydratesLabel = styled(LabelText)`
  ${Carbohydrates}:focus ~ &,
  ${Carbohydrates}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
  }
`;

export const CaloriesLabel = styled(LabelText)`
  ${Calories}:focus ~ &,
  ${Calories}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
  }
`;

export const FatsLabel = styled(LabelText)`
  ${Fats}:focus ~ &,
  ${Fats}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
  }
`;

export const CrossSellLabel = styled(LabelText)`
  ${CrossSellPitch}:focus ~ &,
  ${CrossSellPitch}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
  }
`;

export const ProductPrice = styled(TextBox)``;

export const ProductPriceLabel = styled(LabelText)`
  ${ProductPrice}:focus ~ &,
  ${ProductPrice}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
  }
`;

/**Selected animation to be managed*/
export const IconBorderCircle = styled.div`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props =>
    props.checked ? `${styles.formContentColor}` : 'rgba(176, 167, 230, 0.54)'};
  border: 1px solid #6e5dcc;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  border-bottom: solid 3px #6e5dcc;
  transition: all 0.2s ease-in-out;
  outline: none;
  /*
  animation: ${props =>
    props.checked
      ? css`
          ${WobbleTop} 1s
        `
      : 'none'};
    */
`;
export const AddOnitemIcon = styled.div`
  display: flex;
  width: 75px;
  height: 37px;
  margin-top: -1.5em;
  border-radius: 100px / 50px;
  overflow: hidden;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.39);
  transform: rotate(4deg);
  border-bottom: solid 3px #6e5dcc;
  transition: all 0.6s linear;
  outline: none;
  z-index: -1;
  background: radial-gradient(
    25.93% 25.93% at 50% 50%,
    #8579bf 0%,
    #ffffff 100%
  );
  border: 2px solid #7769b9;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(${props => (props.checked ? '-2px' : '0px')});
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  border-radius: 10px;
  background: ${props =>
    props.checked ? `${styles.formContentColor}` : 'none'};
`;

export const TextRadioButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  background: ${props =>
    props.selected
      ? `${styles.formContentColor}`
      : 'rgba(176, 167, 230, 0.54)'};
  box-shadow: 0px 4px 8px rgba(176, 167, 230, 0.5);
  border-radius: 20px;
  margin: 6px;
  outline: none;
  border: ${props =>
    props.selected ? '4px solid #6e5dcc' : '4px solid rgba(255, 0, 0, 0.0)'};
  transition: all ease 0.6s;
  &:active {
    box-shadow: 0 0 4px ${styles.themecolor};
    transform: translateY(-20px);
  }
`;

export const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  transform: scale(4);
  position: relative;
  left: 70px;
  top: -30px;
  opacity: 0;
  margin: 0;
`;

export const UploadFileInput = styled.input`
  position: relative;
  display: block;
  opacity: 0;
  outline: none;
  transform: scale(3);
  height: 50px;
  top: 70px;
  left: 150px;
`;

export const UploadButton = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-content: center;
  margin-top: 2em;
  color: #f9a9ae;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #b0a7e6 100%);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.28);
  transition: all 0.8s linear;

  &:active {
    box-shadow: inset 0 0 5px rgba(128, 128, 128, 0.32);
    background-image: -webkit-linear-gradient(#fed6e3 0%, #ffcfcf 100%);
    background-image: linear-gradient(#9889f0 0%, #6e5dcc 100%);
    transform: translateY(-15px);
  }
`;

export const UploadIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  transform: scale(1);
  opacity: 0;
`;

export const Bounce = keyframes`
 20%, 53%, 80%, 0%, 100% {
      -webkit-animation-timing-function: cubic-bezier(0.215,.61,.355,1);
      animation-timing-function: cubic-bezier(0.215,.61,.355,1);
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
  }
  40%, 43% {
      -webkit-animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      -webkit-transform: translate3d(0,-30px,0);
      transform: translate3d(0,-30px,0);
  }
  70% {
      -webkit-animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      -webkit-transform: translate3d(0,-15px,0);
      transform: translate3d(0,-15px,0);
  }
  90% {
      -webkit-transform: translate3d(0,-4px,0);
      transform: translate3d(0,-4px,0);
  }

`;

export const AddIconImage = styled.img`
  width: 110px;
  height: 80px;

  animation: ${props =>
    props.checked
      ? css`
          ${Bounce} 1.4s
        `
      : 'none'};
`;

export const RadioButtonIcon = styled.img`
  width: 46px;
  height: 46px;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
  display: flex;
`;

export const SubmitButton = styled.div`
  display: flex;
  width: 90%;
  height: 60px;
  border-radius: 50px;
  background: ${styles.buttonBackgroundGradient};
`;

/**reccipe styles */

export const RecipeName = styled(TextBox)``;

export const RecipeNameLabel = styled(LabelText)`
  ${RecipeName}:focus ~ &,
  ${RecipeName}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
  }
`;

export const SearchInputWrapper = styled(InputWrapper)`
  width: 80%;
`;
export const SearchBox = styled(TextBox)``;

export const SearchBoxLabel = styled(LabelText)`
  ${SearchBox}:focus ~ &,
  ${SearchBox}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
  }
`;
