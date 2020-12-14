import styled from 'styled-components/macro';

export const AddProductContainer = styled.div`
  display: block;
  width: 100%;
  height: 600px;
`;

export const CenterAlignedColumnContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  height: auto;
`;
export const FlexColumnContainer = styled.div`
  display: flex;
  width: 40%;
  margin: auto;
  flex-direction: column;
  align-items: left;
  height: auto;
`;

export const FlexRowContainer = styled.div`
  display: flex;
  width: ${props => props.width};
  height: auto;
  margin-top: ${props => props.marginTop || '30px'};
  margin-left: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FormSectionNameContainer = styled.div`
  display: block;
  width: 73px;
  height: 48px;
  margin: auto;
  padding: auto;
  margin-top: 30px;
  text-align: center;
`;
