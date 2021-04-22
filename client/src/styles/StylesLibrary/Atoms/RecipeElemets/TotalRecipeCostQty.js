import styled from 'styled-components/macro';

export const TotalCostQtyContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 80%;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin-top: 25px;
  height: 75px;
  background: linear-gradient(
    98.05deg,
    rgba(249, 240, 193, 0.62) 9.43%,
    rgba(234, 182, 182, 0.7) 50.94%,
    #49ecd8 123.29%
  );
  border: 1px solid #e7eaef;
  box-sizing: border-box;
  box-shadow: inset -4px -4px 8px #ffffff, inset 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const TotalCostQtyText = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    98.37deg,
    #494343 3.9%,
    rgba(19, 17, 17, 0.35) 103.75%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
