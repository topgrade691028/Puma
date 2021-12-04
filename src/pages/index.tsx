import React from "react";
import Header from "./section/header_section";
import styled from "styled-components";
export const Container = styled.div`
  margin: 0px;
  padding: 0px;
  max-width: 1440px;
`;
const index = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default index;
