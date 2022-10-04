import React, { Component } from "react";
import StyledCustomization from "./inBar.js";
import "./mainstyle.scss";

class MainPage extends Component {
  render() {
    return (
      <div className="mainbox">
        <div className="bg-styling">
          <img
            className="bg-img"
            href="Components/images/pattern-circles.svg"
            alt="none"
          />
          <h1 className="firstheader">Simple, traffic-based pricing</h1>
          <span className="maincallin">
            {" "}
            Sign-up for our 30-day trial. No credit card required.{" "}
          </span>
        </div>
        <div className="pricebarfullbox">
          <span className="changingnum"></span>
          <h2 className="boxhead">Pageviews</h2>
          <div className="pricebar">
            {" "}
            <StyledCustomization />{" "}
          </div>
          <span className="bigpag">$</span>{" "}
          <span className="changingnumwp">interactive number</span>{" "}
          <span className="littlepag">/month</span>
          <br />
          <span className="simplepag">Monthly Billing</span>
          <button className="chaningcomp"></button>
          <span className="simplepag">Yearly Billing</span>
          <span className="simplepag">25%</span>
          <span className="simplepag">discount</span>
        </div>
        <div className="emptydiv"></div>

        <div className="lastbox">
          <ul className="lastboxlist">
            <li className="listitems1">
              <img className="boximg" href="#" alt="none" />
              Unlimited websites
            </li>
            <li className="listitems2">
              <img className="boximg" href="#" alt="none" />
              100% data ownership
            </li>
            <li className="listitems3">
              <img className="boximg" href="#" alt="none" />
              Email reports
            </li>
          </ul>
          <button className="calltoactionbutton">Start my trial</button>
        </div>
      </div>
    );
  }
}
export default MainPage;
