import React from "react";
import {
  TopNavBar,
  LogoTopBar,
  PhoneIcon,
  PhoneNum,
  Line3,
  theme,
} from "../styles/TopNavBarstyle.js";


const TopNavBarComponent = ({
  phoneNum = "(617) 910-5829",
  emailEdlaw = "edlawproject@publiccounsel.net"
}) => {
  return (
    <TopNavBar>
      <a href="/">
        <LogoTopBar
          alt=""
          src="https://static.overlay-tech.com/assets/a29f61a9-ee3d-410d-b425-3344f478a860.png"
        />
      </a>
      <PhoneIcon
        alt=""
        src="https://static.overlay-tech.com/assets/5c19e082-8d67-469b-8258-a1c8d0f0c662.svg"
      />
      <PhoneNum>{phoneNum}</PhoneNum>
      <Line3 />
      <PhoneNum>{emailEdlaw}</PhoneNum>
    </TopNavBar>
  );
};

export default TopNavBarComponent;