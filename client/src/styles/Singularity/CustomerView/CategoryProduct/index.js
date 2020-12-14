import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryProductsContainer = styled.div`
  display: block;
  margin: auto;
`;

export const CategoryProductontainer = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-left: 80px;
`;

export const Productox = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  @media (min-width: 765px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex: 4;
    margin: 20px;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex: 5;
  }
`;

export const ImageWrapper = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
  display: block;
  z-index: -1;
  @media (min-width: 765px) {
    margin: auto;
  }
`;

export const Productontent = styled.div`
  text-align: left;
  margin-left: 1.8em;
  text-decoration: none;
  color: white;
  @media (min-width: 765px) {
    margin-left: 0px;
  }
`;

export const Price = styled.p`
  margin-top: -10px;
  color: black;
  ${Productontent}:hover & {
    color: white;
  }
  @media (min-width: 765px) {
    text-align: center;
  }
`;

export const Productame = styled.h4`
  margin-top: 10px;
  color: black;
  ${Productontent}:hover & {
  }
  @media (min-width: 765px) {
    text-align: center;
  }
`;
