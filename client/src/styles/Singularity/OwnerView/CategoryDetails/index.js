/**
 * File Name : genreCommonStyles.js
 * Collection of the common styles used in the GenreDetails component
 */

import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  @media (min-width: 1280px) {
    max-width: 1000px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 150px;
  }
`;

export const Category = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: auto;
  text-align: center;
  width: 280px;
  height: 200px;
  text-decoration: none;
`;

export const CategoryImageWrapper = styled.div`
  display: inline-flex;
  width: 280px;
  height: 200px;
  border-radius: 20px;
  margin-top: 30px;
  background: -webkit-linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 25%,
    rgba(255, 255, 255, 0.81) 95%
  );
  @media (min-width: 1280px) {
    flex-basis: 50%;
  }
`;

export const CategoryImage = styled.img`
  width: 280px;
  height: 200px;
  object-fit: cover;
  position: relative;
  border-radius: 20px;
  display: flex;
  z-index: -1;
  @media (min-width: 765px) {
    margin: auto;
  }
`;

export const CategoryName = styled.h2`
  display: flex;
  color: whiteSmoke;
  text-align: center;
  font-size: 1.8rem;
  line-height: 1.7;
  margin-top: -50px;
  ${Category}:hover {
    font-size: 1.2rem;
    margin-top: 90px;
  }
`;
