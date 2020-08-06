import React, { Fragment } from "react";
import "./App.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <Fragment>
      <Link to="third" smooth={true} duration={750}>
        Move to second
      </Link>

      <div>
        <div className="scroll-item" id="first">
          FIRST SCROLL
        </div>
        <div className="scroll-item" id="second">
          SECOND SCROLL
        </div>
        <div className="scroll-item" id="third">
          THIRD SCROLL
        </div>

        <div onClick={() => scroll.scrollToTop()}>Scroll to top</div>
      </div>
    </Fragment>
  );
}

export default App;
