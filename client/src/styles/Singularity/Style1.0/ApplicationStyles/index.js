import styled from 'styled-components';

export const styles = {
  dividerColor: 'rgba(82, 243, 234, 0.5)',
  formContentColor: '#6E5DCC',
  themecolor: '#B0A7E6',
  formheadingTextColor: '#6E5DCC',
  linkTextColor: '#6E5DCC',
  buttonTextColor: '#000000',
  selectedBorder: '4px solid #6E5DCC',
  backgroundColor: '#ffffff',
  backgroundGradient:
    'linear-gradient(180deg, rgba(176, 167, 230, 0.5) 0%, #B0A7E6 100%)',
  backgroundLinearGradient:
    'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(110, 93, 204, 0.5) 100%)',
  buttonBackgroundGradient:
    'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(110, 93, 204, 0.5) 100%)',
  dMenuContentColor: '#CCAC00',
  errorText: '#ff6961',
  dividerLineColor: '#6E5DCC',
  inputShadowFilter: ' drop-shadow(0px 4px 4px rgba(206, 164, 43, 0.49))',
  buttonTextColor: '#514E4E',
  selectedLabelColor: '#6E5DCC',
  selectedBorderColor: '#6E5DCC'
};

export const Background = styled.div`
  width: 100%;
  display: block;
  position: absolute;
  width: 100%;
  height: 500vh;
  content: '';
  background: url(https://res.cloudinary.com/antilibrary/image/upload/v1595772184/newBackground_1_wuvjj4.png)
    repeat center center;
  opacity: 0.5;
  z-index: -1;
`;
