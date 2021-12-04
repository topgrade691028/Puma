import React from "react";
import styled from "styled-components";
type Props = {
  fSize?: number;
  fColor?: string;
  fWeight?: number;
  fOpacity?: number;
  content?: string;
};
export const TextDiv = styled.div<Props>`
  font-size: ${(props: any) => props.fSize}px;
  color: ${(props: any) => props.fColor};
  font-weight: ${(props: any) => props.fWeight};
  opacity: ${(props: any) => props.fOpacity}px;
`;
const Text: React.FC<Props> = (props) => {
  return (
    <TextDiv
      fSize={props.fSize}
      fColor={props.fColor}
      fWeight={props.fWeight}
      fOpacity={props.fOpacity}
    >
      {props.content}
    </TextDiv>
  );
};

export default Text;
