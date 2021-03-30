import React, { Component } from "react";
import TopNavBarComponent from "./TopNavBar";
import SideProgressBar from "./SideProgressBar";
import {
  Block,
  PageBody,
} from "../styles/PageStyle";
import { theme } from "../styles/stylesheet";

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    console.log("PageDidMount");
    console.log(this.props.content);
  }
  render() {
    const {content} = this.props
    return (
      <div>
        <nav>
          <TopNavBarComponent />
        </nav>

        <PageBody>
          <Block
            alt=""
            src="https://static.overlay-tech.com/assets/fee2b646-5560-4652-bf3a-a5bde9130249.png"
          >
            <section
              className="pageContent"
              style={{
                padding: "2.5%",
                paddingLeft: "2.5%",
                paddingRight: "2.5%",
              }}
            >
              {this.props.content.page}
              
            </section>
          </Block>
          <SideProgressBar content={this.props.content.side} />
        </PageBody>
      </div>
    );
  }
}
