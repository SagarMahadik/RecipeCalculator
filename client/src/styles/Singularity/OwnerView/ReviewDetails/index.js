import styled from 'styled-components/macro';

export const ProductImage = styled.img`
  width: 98px;
  height: 130px;
  border-radius: 15px;
  object-fit: cover;
  margin-top: 20px;
`;

export const ProductDescription = styled.div`
  width: 174px;
  height: 80px;
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
`;

export const ProductAdditionalInformationContainer = styled.div`
  width: 170px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: left;
  line-height: 12px;
  margin-top: 5px;
`;

export const AdditionalInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30px;
  height: 10px;
  flex-direction: row;
  align-items: left;
  justify-content: space-evenly;
  line-height: 2px;
`;

export const MainAdditionalInformation = styled.div`
  display: flex;
  width: 170px;
  margin: auto;
  flex-direction: column;
  align-items: left;
  height: auto;
  margin-left: 20px;
`;

export const ProductNamePriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 375px;
  height: 50px;
  align-items: left;
  justify-content: space-evenly;
  padding-top: 20px;
`;

export const IconProductnameContainer = styled.div`
display: block;
width: 150px;
height: 30px;
margin-left: -15px;
`
