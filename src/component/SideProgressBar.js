import React from "react";
import PropTypes from 'prop-types'
import {
  SideProgressBar,
  FlexWrapper,
  Sidebar,
} from "../styles/SideProgressBarStyle";
import {theme} from "../styles/stylesheet";


const SideProgressBarComponent = (props) => {
  return (
 
      <Sidebar theme={theme}>
        <FlexWrapper theme = {theme}>
           {props.content} 
          </FlexWrapper>
        </Sidebar>
 

  );
};


export default SideProgressBarComponent;
