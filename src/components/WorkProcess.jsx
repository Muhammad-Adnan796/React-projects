import React from "react";
import { TfiMarkerAlt } from "react-icons/tfi";
import { HiMiniChevronRight } from "react-icons/hi2";
import { GiIdCard } from "react-icons/gi";
import { RxTarget } from "react-icons/rx";
import {BiRightArrowAlt} from "react-icons/bi";
import "../styleComponents/sass/_WorkProcess.scss";

const WorkProcess = () => {
  return (
    <div className="work_process">
      <div className="workPro-txt">
        <h1>WORK PROCESS</h1>
        <hr />
        <p>
          In an ideal world this website wouldn’t exist, a client would
          acknowledge the importance of having web copy before the Proin vitae
          ipsum vel ex finibus semper design starts.
        </p>
      </div>
      <div className="workProCategories">
        <div className="pen">
          <TfiMarkerAlt className="icon"/>
          <h2>Tell us what you need</h2>
          <p>The Big Oxmox advised her not to do so.</p>
        </div>
        <div className="rightarrow i1">
          <HiMiniChevronRight className="arrow" />
        </div>

        <div className="pen">
          <GiIdCard className="icon"/>
          <h2>Get free quotes</h2>
          <p>Little Blind Text didn’t listen.</p>
        </div>
        <div className="rightarrow i2">
          <HiMiniChevronRight className="arrow" />
        </div>
        <div className="pen">
          <RxTarget className="icon"/>
          <h2>Deliver high quality product</h2>
          <p>When she reached the first hills.</p>
        </div>

      </div>

      <button>Get Started <BiRightArrowAlt className="i" /></button>
    </div>
  );
};

export default WorkProcess;
