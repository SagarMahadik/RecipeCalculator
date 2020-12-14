import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";

import MotionSlider from "./MotionSlider";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  body { overflow-x: hidden; }
`;

const Wrapper = styled.div``;

const Element = styled.div`
  width: 260px;
  height: 400px;
  background: tomato;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <MotionSlider>
        {[...Array(10)].map((item, i) => (
          <Element
            key={i}
            style={{ opacity: Math.random() /*, width: random(200, 600)*/ }}
          />
        ))}
      </MotionSlider>
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
