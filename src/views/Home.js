import React from "react";
import Button from "../component/Button"
import Team from "../component/Team"
import Form from "../component/Form"
import Page from "../component/Page"
import {default as Complaint} from "../component/StartMyComplaintComponen/MyComplaint"


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: ["a", "b", "c", "d"],
      showTeam: true,
    };
  }

  componentDidMount() {
    console.log("I was triggered during componentDidMount HOME.JS");
  }
  render() {
    const toggleTeam = () => {
      this.setState({ showTeam: !this.state.showTeam });
    };
     const pageContent = (
        <div>
          <header>
            <h1> Home Page</h1>
            <h3>
              {" "}
              EdLaw Project - The goal for the project is to disrupt the
              systemic denial of education rights in underfunded communities by
              creating a web app that empowers users to enforce students’ rights
              through the state complaint system. The interactive, online tool
              would communicate what the student’s legal rights are, and how to
              go through the process of filing the complaint with the state in
              an accessible format.
            </h3>
          </header>
          <div className="Group Members">
            <Button text="Show Group Members" onClick={toggleTeam} />
            <h4>
              {this.state.showTeam ? (
                <Team team={this.state.team} />
              ) : (
                "Group 6"
              )}
            </h4>
          </div>
        </div>
      );
      
    var content = {
      page: [pageContent, <Form/>],
      side:  <Complaint/> ,
    };
    return (
      <section className="App home">
        <article>
          <Page content={content}/>
        </article>
      </section>
    );
  }
}

export default Home;
