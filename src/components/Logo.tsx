import React from "react";
import styled from "styled-components";
type Props = {
  width: number;
  height: number;
  src: string;
  alt: string;
};
export const Image_div = styled.div<Props>`
  width: ${(props: any) => props.width}px;
  height: ${(props: any) => props.height}px;
`;

const Image: React.FC<Props> = (props) => {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
};

export default Image;
