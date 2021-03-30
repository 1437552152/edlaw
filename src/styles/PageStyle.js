import styled from "styled-components";
import { theme } from "./stylesheet";

export const Block = styled.div`
  width: 72%;
 
  box-shadow: 0 4px 7px 0 ${(props) => props.theme.colors.transparentBlack2};
`;

export const PageBody = styled.div`
  display: flex;
  align-items: inital;
  height: 4062px;
`;


Block.defaultProps = {
  theme: { ...theme },
};
