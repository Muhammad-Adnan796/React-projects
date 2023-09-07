import React from "react";
import user1 from "../assets/user-1-girl.jpg";
import user2 from "../assets/user-2-boy.jpg";
import user3 from "../assets/user-3-boy.jpg";
import "../styleComponents/sass/_WhatSaid.scss";

const WhatSaid = () => {
  return (
    <div className="whatSaid-main">
      <div className="whatSaid-txt">
        <h1>WHAT THEY'VE SAID</h1>
        <hr />
        <p>
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious pulvinar metus molestie
          sed Semikoli.
        </p>
      </div>

      <div className="testimonialsCards">
        <div className="user u1" >
          <div>
            <img src={user1} alt="" />
            <p>
              “I feel confident imposing change on myself. It's a lot more fun
              progressing than looking back. That's why scelerisque pretium
              dolor, sit amet vehicula erat pelleque need throw curve balls.”
            </p>
          </div>

          <h3>
            RUBEN REED - <span>Charleston</span>
          </h3>
        </div>
        <div className="user u1">
          <div>
            <img src={user2} alt="" />
            <p>
              “Our task must be to free ourselves by widening our circle of
              compassion to embrace all living creatures Integer varius lacus
              non magna tempor congue natuasre the whole its beauty.”
            </p>
          </div>
          <h3>
            MICHAEL P. HOWLETT - <span>Worcester</span>
          </h3>
        </div>
        <div className="user u1">
          <div>
            <img src={user3} alt="" />
            <p>
              “I've learned that people will forget what you said, people will
              forget what you did, but people will never aliquam in nunc quis
              tincidunt forget how you vestibulum egestas them feel.”
            </p>
          </div>
          <h3>
            THERESA D. SINCLAIR - <span>Lynchburg</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WhatSaid;
