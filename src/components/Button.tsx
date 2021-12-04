import React from "react";
import styled from "styled-components";
type Props = {
  bwidth?: number;
  bheight?: number;
  bcolor?: string;
  bgcolor?: string;
  bradius?: number;
  btext?: string;
};
export const Custom = styled.div<Props>`
  max-width: ${(props: any) => props.bwidth}px;
  max-height: ${(props: any) => props.bheight}px;
  color: ${(props: any) => props.bcolor};
  background-color: ${(props: any) => props.bgcolor};
  border-radius: ${(props: any) => props.bradius}px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 15px 30px;
  line-height: 160%;
`;
const CustomButton: React.FC<Props> = (props) => {
  return (
    <Custom
      bwidth={props.bwidth}
      bheight={props.bheight}
      bcolor={props.bcolor}
      bgcolor={props.bgcolor}
      bradius={props.bradius}
    >
      {props.btext}
    </Custom>
  );
};

export default CustomButton;
