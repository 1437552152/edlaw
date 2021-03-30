import React, { Component } from 'react';
import { Button, Form, Input, Icon } from 'antd';
class Concerns extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1 style={{ marginTop: '100px', textAlign: 'center', fontSize: '30px' }}>Statement of concerns</h1>
        <div style={{ marginTop: '20px', fontSize: '20px' }}>
          Now we're going to start putting together the "statement of concerns" for your complaint. The statement of concerns tells the PRS officer what happened and where the student's rights were violated.
         </div>
        <div style={{ borderRadius: '10px', backgroundColor: "#eee", fontSize: '20px', marginTop: '20px', marginBottom: '20px', padding: '10px' }}>
          Please note: This part of the tool will take up the bulk of your time and will take anywhere from 30 - 90 minutes, depending on the details of your situation.
        </div>
        <div style={{ marginTop: '20px', fontSize: '20px' }}>
          We'll start by asking you to write a short explanation of what happened. That explanation will be the first paragraph of your statement of concerns.
          <br />
          Then, we'll go through a series of yes/no questions based on the student's legal rights. If you identify a concern related to a specific legal requirement, we'll add a paragraph to your statement of concerns. The guide will suggest a sentence or two to tell the PRS officer what legal right was violated, and you'll add any relevant details about what happened.
         </div>
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#000', fontSize: '23px', height: '50px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('StudentOrGroup')}><Icon type="left" />back</span>
          <Button style={{ backgroundColor: '#5064C7', color: '#fff', fontSize: '20px', width: '100px', height: '46px', lineHeight: '20px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('StudentOrGroup')}>next</Button></div>
      </div>
    )
  }
}
export default Concerns;