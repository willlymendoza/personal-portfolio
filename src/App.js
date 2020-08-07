import React, { Fragment } from "react";
import "./App.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import Container from "components/Container";
import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
