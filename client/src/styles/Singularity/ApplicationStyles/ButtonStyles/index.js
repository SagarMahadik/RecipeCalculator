import styled from 'styled-components/macro';

export const CategoryButton = styled.div`
  width: 300px;
  height: 100px;
  background: rgba(9, 8, 8, 0.7);
  opacity: 0.8;
  /* Yellow */

  border: 3px solid #f2c94c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 55px;
`;

export const EntryButton = styled.div`
  width: 188px;
  height: 58px;
  background: #f4de19;
  mix-blend-mode: hard-light;
  border-radius: 50px;
`;

export const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: auto;
  width: ${props => props.width};
  height: 58px;
  background: #daa520;
  border-radius: 50px;
  color: black;
  margin-top: 15px;

`;

export const PrevoiusButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: auto;
  width: ${props => props.width};
  height: 58px;
  background: #daa520;
  border-radius: 50px;
  color: black;
  margin-top: 15px;
`;

export const ButtonText = styled.div`
  display: block;
  margin: auto;
  padding: auto;
  color: black;
  font-family: Sacramento;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
`;

export const CopyButton = styled.div`
  width: 50px;
  height: 29px;
  background: rgba(66, 226, 248, 0.3);
  border-radius: 25px;
  color: black;
  margin-left: 15px;
`;

/**
 * Add the image for Back navigation
 */
export const BackNavigationButton = styled.div`
  width: 50px;
  height: 50px;
  background: url(backicon.png);
`;

/**
 * Add the confirm decision image
 */

export const AcceptButton = styled.div`
  width: 50px;
  height: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction:row;
  margin-top: 30px;
  width: 100%;
`;
