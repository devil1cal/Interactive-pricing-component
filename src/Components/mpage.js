import React, { Component } from "react";

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="bg-styling">
          <img href="#" alt="none" />
          <h1>Simple, traffic-based pricing</h1>
          <span> Sign-up for our 30-day trial. No credit card required. </span>
          <div>
            <span></span>
            <h2>Pageviews</h2>
            <div> interactive bar </div>
            <span>$</span> <span>interactive number</span> <span>/month</span>
            <span>Monthly Billing</span>
            <button></button>
            <span>Yearly Billing</span>
            <span>25%</span>
            <span>discount</span>
          </div>
          <div></div>
        </div>

        <div>
          <ul>
            <li>
              <img href="#" alt="none" />
              Unlimited websites
            </li>
            <li>
              <img href="#" alt="none" />
              100% data ownership
            </li>
            <li>
              <img href="#" alt="none" />
              Email reports
            </li>
          </ul>
          <button>Start my trial</button>
        </div>
      </div>
    );
  }
}
export default MainPage;
