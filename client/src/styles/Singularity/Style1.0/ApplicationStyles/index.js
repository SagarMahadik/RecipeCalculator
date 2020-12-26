import styled from 'styled-components';

export const styles = {
  dividerColor: 'rgba(82, 243, 234, 0.5)',
  formContentColor: '#514E4E',
  themecolor: '#CEA42B',
  buttonTextColor: '#514E4E',
  selectedBorder: '4px solid #CEA42B',
  backgroundGradient:
    'linear-gradient(181.83deg, rgba(4, 4, 4, 0) -206.42%, #FCE07D 98.45%)',
  backgroundLinearGradient:
    'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(110, 93, 204, 0.5) 100%)',
  buttonBackgroundGradient:
    'linear-gradient(180deg, rgba(247, 136, 101, 0.49) 0%, #6E5DCC 100%)',
  dMenuContentColor: '#CCAC00',
  errorText: '#ff6961'
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
