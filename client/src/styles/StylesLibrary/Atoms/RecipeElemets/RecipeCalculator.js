import styled from 'styled-components/macro';

export const RecipeCalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin-top: 24px;
  background: linear-gradient(279.96deg, #e7eaef -16.21%, #e7eaef 134.55%);
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const RecipeNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin: 16px;
  background: linear-gradient(
    99.47deg,
    #c8eff1 1.24%,
    rgba(44, 242, 255, 0) 163.38%
  );
  border: 1px solid #e7eaef;
  box-sizing: border-box;
  box-shadow: inset -4px -4px 8px #ffffff, inset 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const RecipeName = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  background: linear-gradient(
    98.37deg,
    #494343 3.9%,
    rgba(19, 17, 17, 0.35) 103.75%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const RecipeCalculatorDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-top: 0;
`;

export const RecipeCalculatorDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 8px;
  padding: 4px;
  background: linear-gradient(
    297.96deg,
    #e7eaef -35.52%,
    #e7eaef 46.28%,
    #cbd0d7 105.97%
  );
  border: 1px solid #e7eaef;
  box-sizing: border-box;
  box-shadow: inset -4px -4px 8px #ffffff, inset 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const RecipeDetailContentText = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  background: linear-gradient(
    98.37deg,
    #494343 3.9%,
    rgba(19, 17, 17, 0.35) 103.75%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
