import React from "react";
import styled from "styled-components";
import Back from "../asserts/background.png";
export const Canvas = styled.div`
  position: absolute;
  z-index: -1;
`;
const Shape = () => {
  return (
    <Canvas>
      <img src={Back} width="1188px" height="649px" alt="back" />
    </Canvas>
    // <Canvas
    //   width="1188"
    //   height="649"
    //   viewBox="0 0 1188 649"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     opacity="0.1"
    //     d="M0 0H1188L994.605 649H0V0Z"
    //     fill="url(#paint0_linear_23_241)"
    //   />
    //   <defs>
    //     <linearGradient
    //       id="paint0_linear_23_241"
    //       x1="13.5"
    //       y1="324"
    //       x2="1590.5"
    //       y2="324"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stop-color="#EE5514" />
    //       <stop offset="1" stop-color="#EE5514" stop-opacity="0" />
    //     </linearGradient>
    //   </defs>
    // </Canvas>
  );
};
export default Shape;
