import styled from 'styled-components/macro';

const InputWidthMobile = '197px';

export const InputDropdown = styled.div`
  width: ${InputWidthMobile};
  height: 26px;
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

export const InputText = styled.input`
  display: flex;
  width: ${InputWidthMobile};
  height: 29px;
  margin-left: 10px;
  background: rgba(66, 226, 248, 0.3);
  border-radius: 25px;
  color: black;
`;

export const InputSelect = styled.select`
  display: flex;
  width: ${InputWidthMobile};
  height: 29px;
  margin-left: 10px;
  background: rgba(66, 226, 248, 0.3);
  border-radius: 25px;
  color: black;
`;

export const InputOption = styled.option`
  display: flex;
  width: 150px;
  height: 29px;
  margin-left: 10px;
  background: rgba(66, 226, 248, 0.3);
  border-radius: 25px;
  color: black;
`;

export const InputTextContainer = styled.div`
  display: flex;
  margin: auto;
  padding: auto;
  margin-top: 25px;
  margin-left: 40px;
  flex-direction: row;
  width: 375px;
  height: auto;
`;
export const RoundInputTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 375px;
  height: auto;
  margin-top: 30px;
  margin-left: 260px;
`;

export const UploadImageBackground = styled.div`
  display: block;
  width: 165px;
  height: 151px;
  margin-left: 20px;
  border-radius: 50%;
  background: rgba(66, 226, 248, 0.3);
`;

export const UploadFileInput = styled.input`
  display: block;
  margin: auto;
  padding: auto;
  opacity: 0;
  transform: scale(2);
  height: 50px;
  position: relative;
  top: -20px;
  left: 90px;
`;

export const InputParagraph = styled.input`
  width: ${InputWidthMobile};
  height: 80px;
  background: rgba(66, 226, 248, 0.3);
  border-radius: 25px;
  margin-left: 10px;
`;

export const TextInputRoundLabel = styled.div`
  width: 137.96px;
  height: 61.53px;
  background: rgba(244, 222, 25, 0.5);
  border: 1px solid #daa520;
  border-radius: 55px;
  transform: matrix(1, 0.01, -0.01, 1, 0, 0);
  margin-left: -62px;
`;

export const TextInputRoundLabelName = styled.div`
  position: relative;
  width: 105px;
  height: 14px;
  top: 20px;
  left: 70px;
`;

export const TextInputRound = styled.input`
  width: 63px;
  height: 62px;
  background: #ffffff;
  border: 1px solid #daa520;
  box-sizing: border-box;
  border-radius: 50%;
  z-index: 2;
`;

export const IconCheckBoxRoundButton = styled.div`
  width: 33.33%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconCheckBoxRound = styled.div`
  width: 63px;
  height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${props =>
    props.checked ? '4px solid #daa520' : '1px solid #daa520'};
  box-sizing: border-box;
  border-radius: 50%;
  transition: 800ms linear;
  background: ${props => (props.checked ? 'rgba(66, 226, 248, 0.3)' : 'white')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  transform: scale(2);
  position: relative;
  top: 40px;
  left: 20px;
  opacity: 0;
  z-index: 0;
`;

export const IconRadioButtonRound = styled.button`
  width: 63px;
  height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${props =>
    props.checked ? '4px solid #daa520' : '1px solid #daa520'};
  box-sizing: border-box;
  border-radius: 50%;
  transition: transform 500ms ease-in;
  background: ${props => (props.checked ? 'rgba(66, 226, 248, 0.3)' : 'white')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: -1;
`;

export const CheckBoxIcon = styled.img`
  height: 40px;
  width: 40px;
  transition: all 0.6s linear;
  box-sizing: border-box;
  transform: translateY(${props => (props.checked ? '15px' : '0px')});
`;

export const CheckBoxIconName = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 55px;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 10px;
  margin-left: -15px;
`;

export const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  transform: scale(3);
  position: relative;

  opacity: 1;
`;

export const RadioButtonRound = styled.div`
  width: 18px;
  height: 17px;
  background: #ffffff;
  border-radius: 50%;
  margin-left: 30px;
  /* Yellow */

  border: 4px solid #f2c94c;
  box-sizing: border-box;
`;
