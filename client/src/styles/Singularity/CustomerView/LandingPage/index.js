import styled from 'styled-components/macro';

import landingBackground from 'img/piatto/CustomerLanding/backgroundMobileView.jpg';
import { Link } from 'react-router-dom';

export const LandingPageContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background-color: #0d0c0c;
`;

export const Background = styled.div`
  height: 526px;
  background: url(${landingBackground});
  filter: blur(2.5px);
  background-size: cover;
  background-position: center;
`;

export const LandingPageContentContainer = styled.div`
  position: relative;
  margin: auto;
  padding: auto;
  text-align: center;
  margin-top: -110px;
  z-index: 2;
  width: 100%;
  overflow-y: scroll;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: auto;
  height: 300px;
  background: rgba(0, 0, 0, 0.1);
  color: #c7b72a;
  text-align: center;
`;

export const Content = styled.text`
  font-family: 'Sacramento', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 53px;
`;

export const Button = styled(Link)`
  display: block;
  margin: auto;
  padding: auto;
  margin-top: 10px;
  width: 188px;
  height: 58px;
  background: #f4de19;
  mix-blend-mode: hard-light;
  border-radius: 50px;
  background-color: #f4de19;
  text-align: center;
  color: black;
  font-family: Sacramento;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  text-decoration: none;
`;

export const Quote = styled.div`
  display: block;
  margin: auto;
  padding: auto;
  margin-top: 10px;
  font-family: 'Sacramento', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  color: #c7b72a;
`;

export const AuthorName = styled.div`
  display: block;
  margin: auto;
  padding: auto;
  font-family: 'Sacramento', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  color: #c7b72a;
`;
