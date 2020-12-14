import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CategoryDetailsBackgroundImage from 'img/piatto/VarietyDetails/VarietyDetails.jpg';

export const CategoryDetailsBackground = styled.div`
  width: 375px;
  height: 812px;
  left: 3px;
  top: 0px;

  background: linear-gradient(
    180deg,
    #171515 16.56%,
    rgba(21, 18, 18, 0) 31.22%
  );
  opacity: 0.8;
`;

export const LogoCartContainer = styled.div`
  width: 375px;
  height: 168px;
  display: block;
`;

export const CategoryDetailsContainerBackground = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 640px;
  background-image: url(${CategoryDetailsBackgroundImage});
  transform: rotate(-180deg);
  filter: blur(2px);
  z-index: 0;
  opacity: 0.3;
`;

export const CategoryDetailsContainer = styled.div`
  position: absolute;
  top: 168px;
  z-index: 10;
  display: block;
  margin: auto;
`;

export const Category = styled.div`
  display: block;
  margin: auto;
  padding: auto;
  width: 300px;
  height: 100px;
  z-index: 10;
  background: rgba(9, 8, 8, 0.7);
  opacity: 0.8;
  border: 3px solid #f2c94c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 55px;
`;

export const CategoryName = styled.div`
  display: block;
  width: 200px;
  height: 100px;
  margin-left: 50px;
  font-family: 'PT Sans', sans-serif;
  font-style: bold;
  font-weight: normal;
  font-size: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #ffffff;
  mix-blend-mode: hard-light;
`;
