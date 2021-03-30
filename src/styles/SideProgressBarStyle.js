import styled from "styled-components";
import {theme} from "./stylesheet"

export const SideProgressBar = styled.div`
  // display: inline-block;
  // align-items: inital;
`;

export const Sidebar = styled.div`
  width: 28%;
  height: 100%;
  // position: relative;
  align-itmes: center;
  background-color: ${(props) => props.theme.colors.whiteSmoke2};
  border: 0px solid ${(props) => props.theme.colors.silver};
`;
export const FlexWrapper = styled.div`
  // background-color: ${(props) => props.theme.colors.white};
  border-radius: 3px;
  padding: 2% 8%;
  // display: flex;
  flex-direction: column;
  align-items: flex-start;
  // position: relative;
  border: 0px solid ${(props) => props.theme.colors.silver};
`;

SideProgressBar.defaultProps = {
  theme: { ...theme },
};

Sidebar.defaultProps = {
  theme: { ...theme },
};
FlexWrapper.defaultProps = {
  theme: { ...theme },
};