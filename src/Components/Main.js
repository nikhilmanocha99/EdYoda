import React from "react";
import "./style.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import Radio from "../images/Radio.png";
import red from "../images/red.png";

export default function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <h1>
          Access curated courses worth <br />₹<del>18,500</del>at just{" "}
          <span>₹ 99</span>per year!
        </h1>
        <div className="list-items">
          <ul>
            <li>
              <img src={img1} alt="" />
              <span>100+</span> Job relevant courses{" "}
            </li>
            <li>
              <img src={img2} alt="" />
              <span>20,000+</span> Hours of content
            </li>
            <li>
              <img src={img3} alt="" />
              <span>Exclusive</span> webinar access
            </li>
            <li>
              <img src={img4} alt="" />
              Scholarship worth <span>₹94,500</span>
            </li>
            <li>
              <img src={img5} alt="" />
              <span>Ad Free</span> learning experience
            </li>
            <img src="" alt="" />
          </ul>
        </div>
      </div>
      <div className="main-right">
        <div className="form-top">
          <div>
            <button>1</button>
            <span>Sign Up</span>
          </div>
          <div>
            <button>2</button>
            <span>Subscribe</span>
          </div>
        </div>
        <form action="">
          <div className="form-body">
            <div className="input-feild">
              {/* <span>Offer expired</span> */}
              <div id="">
                <div className="input-feild-content" id="expired">
                  <div>
                    <img src={Radio} alt="" />
                    <span>12 Months Subscription </span>{" "}
                    <div>
                      <span style={{ textAlign: "right" }}>Total ₹179</span>
                      <span style={{ textAlign: "right" }}>
                        ₹15 <span style={{ textAlign: "right" }}>/mo</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="feild">
                <div className="input-feild-content">
                  <div>
                    <img src={Radio} alt="" />
                    <span>12 Months Subscription </span>{" "}
                    <div>
                      <span style={{ textAlign: "right" }}>Total ₹179</span>
                      <span style={{ textAlign: "right" }}>
                        ₹15 <span style={{ textAlign: "right" }}>/mo</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="feild">
                <div className="input-feild-content" id="inactive2">
                  <div>
                    <img src={Radio} alt="" />
                    <span>6 Months Subscription </span>{" "}
                    <div>
                      <span style={{ textAlign: "right" }}>Total ₹179</span>
                      <span style={{ textAlign: "right" }}>
                        ₹15 <span style={{ textAlign: "right" }}>/mo</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="feild">
                <div className="input-feild-content" id="inactive1">
                  <div>
                    <img src={Radio} alt="" />
                    <span>3 Months Subscription </span>{" "}
                    <div>
                      <span style={{ textAlign: "right" }}>Total ₹179</span>
                      <span style={{ textAlign: "right" }}>
                        ₹15 <span style={{ textAlign: "right" }}>/mo</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="fees"><span>Subscription Fee</span> <span>₹18,500</span></div>
            <div className="limited">
<div><p id ="limited-text"><span>Limited time offer</span> <span>- ₹18,401</span></p>
<p><img src={red} alt="" /> <span>Offer valid till 25th March 2023 </span></p></div>
            </div>
            <div className="fees"><span>Total (Incl. of 18% GST)</span> <span>₹149</span></div>
          </div>
          <div className="form-foot">
            <button className="cancel">Cancel</button>
            <button className="proceed">Proceed to pay</button>
          </div>
        </form>
      </div>
    </div>
  );
}
