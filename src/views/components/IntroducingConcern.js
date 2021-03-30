import React, { Component } from 'react';
import { Button, Form, Input, Row, Col, Select, Icon } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
class IntroducingConcern extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }
  render() {
    let { getFieldDecorator, getFieldValue } = this.props.form;
    let formItemLayout = { labelCol: { span: 0 }, wrapperCol: { span: 22 } };
    return (
      <div style={{ width: "800px", margin: "0 auto" }}>
        <h1 style={{ marginTop: '100px', fontSize: '30px' }}>Introducing your concern</h1>
        <div style={{ marginTop: '20px', fontSize: '14px' }}>
          Before we start the questions, please briefly describe your concerns in the box below.  The text that you write will be the first paragraph of your complaint. It will set the stage for the more specific information that we get through the questions.
       </div>
        <div style={{ marginTop: '50px', marginBottom: '10px', fontSize: '13px' }}>
          <a href="#">What kind of information should I include?</a>
        </div>
        <Row>
          <Col span={24}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('relationArea')(
                <TextArea rows={8} />
              )}
            </FormItem>
          </Col>
        </Row>
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#000', fontSize: '23px', height: '50px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('Concerns')}><Icon type="left" />Back</span>
          <Button style={{ backgroundColor: '#5064C7', color: '#fff', fontSize: '20px', width: '100px', height: '46px', lineHeight: '20px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('ChooseConcerns')}>next</Button></div>
      </div>
    )
  }
}
export default IntroducingConcern;