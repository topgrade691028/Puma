import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px;
  margin: 0px 230px;
`;
export const MainMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 40px;
`;
export const Tab = styled.div`
  cursor: pointer;
  :hover div {
    color: #ee5514;
  }
`;
export const TapBar = styled.div`
  grid-gap: 100px;
  display: flex;
  flex-direction: row;
`;
export const Content = styled.div`
  margin: 0px 230px;
`;
export const Detail = styled.div`
  max-width: 366px;
`;
