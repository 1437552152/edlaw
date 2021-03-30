import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
class Home extends Component {
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
        <h1 style={{ marginTop: '100px', textAlign: 'center', fontSize: '30px' }}>File a new complaint with PRS</h1>
        <div style={{ marginTop: '20px', fontSize: '20px' }}>
          The Problem Resolution System (PRS) is the Department of Elementary and Secondary
    Education’s (DESE) system for addressing complaints about students’ educational rights.  More information about PRS and what happens when you file a complaint is available
         </div>
        
         
        <div style={{ marginTop: '20px', fontSize: '20px' }}>
          This guide will walk you through the process of filing a complaint.  After getting your background information, we'll go through a series of questions about your concerns, and suggest legal language to include in your complaint if the guide identifies that a legal right may have been violated. If you'd rather file the complaint with PRS directly (without the suggestions in this guide) you can do so here.
          <br />
          <div style={{ borderRadius: '10px', backgroundColor: "#eee", fontSize: '20px', marginTop: '20px', marginBottom: '20px', padding: '10px' }}>
         Please note: This guide is intended to be a tool to help families fill out a PRS complaint. It is not legal advice and we cannot guarantee a particular outcome or that this process will get you the outcome you want. 
        </div>
          Still, filing a PRS complaint is important because DESE is not aware of problems in the district unless people file complaints, and your complaint may help not only your student but also other students across Massachusetts. If you have questions, or if the tool is not addressing your concerns as you're going through the questions to write the complaint, call the EdLaw Project intake line at (617) 910-5829, or fill out the Helpline Intake Form  Here.
         </div>
        <div style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto',width:'400px' }}>
          <Button style={{ backgroundColor: '#5064C7', width: '400px', color: '#fff', fontSize: '23px', height: '50px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('Contact')}>I’m ready to start the walkthrough</Button></div>
      </div>
    )
  }
}
export default Home;