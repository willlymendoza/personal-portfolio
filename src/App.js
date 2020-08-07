import React, { Fragment } from "react";
import "./App.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import Container from "components/Container";
import Header from "components/Header";
import Main from "components/Main";

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
