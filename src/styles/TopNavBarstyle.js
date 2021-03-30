import styled from "styled-components";
import {theme} from "./stylesheet"

export const TopNavBar = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 33px 47px 32px 38px;
  box-shadow: 0 3px 4px 0
    ${props => props.theme.colors.transparentBlack};
  display: flex;
  align-items: flex-start;
`;
export const LogoTopBar = styled.img`
  margin-right: 729px;
`;
export const PhoneIcon = styled.img`
  margin-top: 17px;
  margin-right: 8px;
  margin-left: 20%;
`;
export const PhoneNum = styled.p`
  font-family: ${props =>
    props.theme.fonts.sourceSansPro20Light.family};
  font-size: ${props =>
    props.theme.fonts.sourceSansPro20Light.size};
  font-weight: ${props =>
    props.theme.fonts.sourceSansPro20Light.weight};
  line-height: ${props =>
    props.theme.fonts.sourceSansPro20Light.lineHeight};
  color: ${props => props.theme.colors.black};
  margin-top: 12px;
  &:not(:last-of-type) {
    margin-right: 25px;
  }
`;
export const Line3 = styled.div`
  width: 1px;
  height: 43px;
  background-color: ${props => props.theme.colors.black};
  margin-top: 5px;
  margin-right: 21px;
`;

TopNavBar.defaultProps = {
  theme: {...theme}
}
PhoneNum.defaultProps = {
  theme: {...theme}
}
Line3.defaultProps = {
  theme: {...theme}
}