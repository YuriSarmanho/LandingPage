import React from "react";
import Shoe1 from '../../images/shoe1.jpg';
import Shoe2 from "../../images/shoe2.jpg";
import Shoe3 from "../../images/shoe3";

const Info = () => {
  return (
    <>
      <div class="feature">
        <div class="content">
          <p class="title">Lightweight</p>
          <p class="desc">
            Upper mesh material provides proper ventilation and reduction in the
            weight of the shoes.
          </p>
        </div>

        <img src={Shoe1} alt="Another shoe"/>
      </div>
      <div class="feature left">
        <div class="content">
          <p class="title">Affordable</p>
          <p class="desc">
            Upper mesh material provides proper ventilation and reduction in the
            weight of the shoes.
          </p>
        </div>
        <img src={Shoe2} alt="Another shoe"/>
      </div>
      <div class="feature">
        <div class="content">
          <p class="title">Playable</p>
          <p class="desc">
            Upper mesh material provides proper ventilation and reduction in the
            weight of the shoes.
          </p>
        </div>
        <img src={Shoe3} alt="Another shoe"/>
      </div>
    </>
  );
};

export default Info;
