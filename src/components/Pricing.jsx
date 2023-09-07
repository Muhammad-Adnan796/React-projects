import React from "react";
import "../styleComponents/sass/_Pricing.scss";

const Pricing = () => {
  return (
    <div className="pricing">
     <a id="pricing"></a>
      <div className="pricing-nest">
        <div className="pricing-heading">
          <h1>OUR PRICING</h1>
          <hr />
          <p>
            Call to action pricing table is really crucial to your for your
            business website. Make your bids stand-out with amazing options.
          </p>
        </div>

        <div className="pricing-cards">
          <div className="cards">
            <h2>ECONOMY</h2>
            <h1>$9.90</h1>
            <p>BILLING PER MONTH</p>
            <hr />
            <div className="specs">
              <h3>
                Bandwidth: <span>1GB</span>
              </h3>
              <h3>
                Onlinespace: <span>50MB</span>
              </h3>
              <h3>
                Support: <span>No</span>
              </h3>
              <h3>
                <span>1</span> Domain
              </h3>
              <h3>
                <span>No</span> Hidden Fees
              </h3>
            </div>
            <button>Join Now</button>
          </div>
          <div className="cards">
            <h2>DELUXE</h2>
            <h1>$19.90</h1>
            <p>BILLING PER MONTH</p>
            <hr />
            <div className="specs">
              <h3>
                Bandwidth: <span>10GB</span>
              </h3>
              <h3>
                Onlinespace: <span>500MB</span>
              </h3>
              <h3>
                Support: <span>Yes</span>
              </h3>
              <h3>
                <span>10</span> Domain
              </h3>
              <h3>
                <span>No</span> Hidden Fees
              </h3>
            </div>
            <button>Join Now</button>
          </div>
          <div className="cards">
            <h2>ULTIMATE</h2>
            <h1>$29.90</h1>
            <p>BILLING PER MONTH</p>
            <hr />
            <div className="specs">
              <h3>
                Bandwidth: <span>100GB</span>
              </h3>
              <h3>
                Onlinespace: <span>2 GB</span>
              </h3>
              <h3>
                Support: <span>Yes</span>
              </h3>
              <h3>
                <span>Unlimited</span> Domain
              </h3>
              <h3>
                <span>No</span> Hidden Fees
              </h3>
            </div>
            <button>Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
