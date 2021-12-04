import Img1 from "../asserts/shoes1.png";
import Img2 from "../asserts/shoes2.png";
import Img3 from "../asserts/shoes3.png";
import Img4 from "../asserts/shoes4.png";
import Img5 from "../asserts/shoes5.png";
import React from "react";
import Slider from "react-slick";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
export default SimpleSlider;
