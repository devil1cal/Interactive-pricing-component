import React, { Component } from "react";
import StyledCustomization from "./inBar.js";
import "./images/pattern-circles.svg";
import MySwitch from './switch.js';
import Button from '@mui/material/Button';
import TickIcon from "./images/icon-check.js";
//import "./mainstyle.scss";
import "./mix.scss";


const svgdesign={
  viewBox:"0 0 25 25",
  width:"25",
  height:"25",
  border:"1px solid red"
};

class MainPage extends Component {



  render() {
    return (
      <div className="mainbox">
        <div className="bg-box1" >

          <div className="total-first-box">

            <div className="first-call-to-action">
              <h1 className="firstheader">Simple, traffic-based pricing</h1>
              <span className="maincallin">Sign-up for our 30-day trial. 
              <br/>No credit card required.</span>
            </div>

            <div className="circle-pattern" >
             <svg alt="circle image"xmlns="http://www.w3.org/2000/svg" width="146" height="145">
              <g fill="none" fill-rule="evenodd" stroke="#CFD8EF">
              <circle cx="63" cy="82" r="62.5"/><circle cx="105" cy="41" r="40.5"/></g></svg>
            </div>
          </div>
        </div>

        <div className="card-box">          
          <div className="pricebarfullbox">
            <div className="pageviewbox">
              <span className="changingnum">100K</span>
              <span className="boxhead">Pageviews</span>
            </div>

            <div className="pricebar">
              {" "}<StyledCustomization />{" "}
            </div>

            <div className="billingbox">
              <div className="billbox">
                <span className="bigpag">$</span>{" "}
                <span className="changingnumwp">16.00</span>{" "}
                <span className="littlepag">/month</span>
              </div>
              <div className="toggle-f-b">
                <span className="simplepag">Monthly Billing</span>
                <MySwitch/>
                <span className="simplepag">Yearly Billing</span>
                <span className="red-r-b simplepag">25%</span>
                <span className="showinbig simplepag">discount</span>
              </div>
            </div>
          </div>

            <div className="emptydiv"></div>

            <div className="lastbox">
              <div>
                <ul className="lastboxlist">
                  <li className="listitems1">
                    
                    <svg  width="25px" height="25px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" >
                    <path  fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
                    
                    Unlimited websites
                  </li>

                  <li className="listitems2">
                  <TickIcon/>
                    100% data ownership
                  </li>

                  <li className="listitems3">
                  <img className="boxing" src=".\images\greentick.svg" alt="tick"/>
                 Email reports
                  </li>
                </ul>
              </div>
              <div>
              <Button
                disabled={false}
                loading={false}
                onClick={function(){}}
                size="lg"
                variant="solid">
                  Start My Trail
              </Button>
              </div>
            </div>
        </div> 
        <div className="bg-box2"></div>
      </div>
    );
  }
}
export default MainPage;
