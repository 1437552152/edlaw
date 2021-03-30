import React from "react";
import {
  StartComplaint,
  Header,
  Text,
  FlexWrapperOne,
  ButtonText
} from "./StartMyComplaint.style";

const StartMyComplaintComponent = ({
  header = "Start My Complaint",
  text = "Our new tool will walk you through the process of filing a new PRS complaint.",
  buttonText = "Continue"
}) => {
  return (
    <StartComplaint>
      <Header>{header}</Header>
      <Text>{text}</Text>
      <FlexWrapperOne>
        <ButtonText>{buttonText}</ButtonText>
      </FlexWrapperOne>
    </StartComplaint>
  );
};

export default StartMyComplaintComponent;