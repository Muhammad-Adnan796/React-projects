import React from "react";
import { SlDiamond } from "react-icons/sl";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { RiReactjsLine } from "react-icons/ri";
import { LuNewspaper } from "react-icons/lu";
import { LuPlane } from "react-icons/lu";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import "../styleComponents/sass/_Services.scss";

const Services = () => {
  return (
    <div id="services">
      <h1>OUR SERVICES</h1>
      <hr />
      <p className="services-des">
        We craft digital, graphic and dimensional thinking, to create category
        leading brand experiences that have meaning and add a value for our
        clients.
      </p>
      <div className="service-cards">
        <div className="service-div">
          <div className="diamond-sec">
            <div className="diamond-icon txt-primary">
              <i>
                <SlDiamond />
              </i>
            </div>
            <h1 className="servic-cat-head">Digital Design</h1>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Moltin gives you the platform.
            </p>
          </div>
          <div className="diamond-sec">
            <div className="diamond-icon txt-primary">
              <i>
                <BsPcDisplayHorizontal />
              </i>
            </div>
            <h1 className="servic-cat-head">Unlimited Colors</h1>
            <p>
              Credibly brand standards compliant users without extensible
              services. Anibh euismod tincidunt ut laoreet.
            </p>
          </div>
          <div className="diamond-sec">
            <div className="diamond-icon txt-primary3">
              <i>
                <LiaPiggyBankSolid />
              </i>
            </div>
            <h1 className="servic-cat-head">Strategy Solutions</h1>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean necessary regelialia.
            </p>
          </div>
        </div>
        <div className="service-div">
          <div className="diamond-sec">
            <div className="diamond-icon txt-primary">
              <i>
                <RiReactjsLine />
              </i>
            </div>
            <h1 className="servic-cat-head">Awesome Support</h1>
            <p>
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth leave for the far World.
            </p>
          </div>
          <div className="diamond-sec">
            <div className="diamond-icon txt-primary">
              <i>
                <LuNewspaper />
              </i>
            </div>
            <h1 className="servic-cat-head">Truly Multipurpose</h1>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="diamond-sec">
            <div className="diamond-icon txt-primary">
              <i>
                <LuPlane />
              </i>
            </div>
            <h1 className="servic-cat-head">Easy to customize</h1>
            <p>
              Question Marks and devious Semikoli, but the Little Blind Text
              didn’t listen. She packed her seven versalia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
