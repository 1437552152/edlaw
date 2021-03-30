import styled from "styled-components";
import {theme} from "./stylesheet.copy"

export const StartComplaint = styled.div`
  background-color: ${props =>
    props.theme.colors.ghostWhite};
  padding: 28px 28px 26px 26px;
  box-shadow: 2px 2px 15px 0
    ${props => props.theme.colors.transparentBlack};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.p`
  width: 201px;
  font-family: ${props =>
    props.theme.fonts.sourceSansPro22SemiBold.family};
  font-size: ${props =>
    props.theme.fonts.sourceSansPro22SemiBold.size};
  font-weight: ${props =>
    props.theme.fonts.sourceSansPro22SemiBold.weight};
  line-height: ${props =>
    props.theme.fonts.sourceSansPro22SemiBold.lineHeight};
  color: ${props => props.theme.colors.darkSlateGray};
  text-align: center;
  margin-bottom: 15px;
`;
export const Text = styled.p`
  width: 201px;
  font-family: ${props =>
    props.theme.fonts.sourceSansPro15Light.family};
  font-size: ${props =>
    props.theme.fonts.sourceSansPro15Light.size};
  font-weight: ${props =>
    props.theme.fonts.sourceSansPro15Light.weight};
  line-height: ${props =>
    props.theme.fonts.sourceSansPro15Light.lineHeight};
  color: ${props => props.theme.colors.black};
  margin-bottom: 12px;
`;
export const FlexWrapperOne = styled.button`
  background-color: ${props =>
    props.theme.colors.slateBlue};
  padding: 9px 59px 10px 55px;
  display: flex;
  align-items: center;
`;
export const ButtonText = styled.p`
  font-family: ${props =>
    props.theme.fonts.sourceSansPro22SemiBold.family};
  font-size: ${props =>
    props.theme.fonts.sourceSansPro22SemiBold.size};
  font-weight: ${props =>
    props.theme.fonts.sourceSansPro22SemiBold.weight};
  line-height: ${props =>
    props.theme.fonts.sourceSansPro22SemiBold.lineHeight};
  color: ${props => props.theme.colors.white};
  text-align: center;
`;

StartComplaint.defaultProps = {
  theme: {...theme}
}
Header.defaultProps = {
  theme: {...theme}
}
Text.defaultProps = {
  theme: {...theme}
}
FlexWrapperOne.defaultProps = {
  theme: {...theme}
}
ButtonText.defaultProps = {
  theme: {...theme}
}