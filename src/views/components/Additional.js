import React, { Component } from 'react';
import { Button, Form, Input, Row, Col, Select,Icon } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
class Additional extends Component {
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
        <h1 style={{ marginTop: '100px', fontSize: '30px' }}>Additional Info</h1>
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          What is your primary language?
       </div>
        <div style={{ marginBottom: '10px', fontSize: '13px' }}>
          <a href="#">What if I speak more than one language?</a>
        </div>
        <Row>
          <Col span={13}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('language')(
                <Select placeholder="Please language">
                  <Option value="china">China</Option>
                  <Option value="usa">English</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          What is your relationship to the student?
       </div>
        <div style={{ marginBottom: '10px', fontSize: '13px' }}>
          <a href="#">More information</a>
        </div>
        <Row>
          <Col span={12}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('relationship')(
                <Select placeholder="Select relationship">
                  <Option value="china">mother</Option>
                  <Option value="usa">father</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          </Row>
          <div style={{ marginTop: '10px', fontSize: '14px' }}>
          If you require accommodations for communicating with DESE, describe them in the box below.
       </div>
        <div style={{ marginBottom: '10px', fontSize: '13px' }}>
          <a href="#">What does this mean?</a>
        </div>
        <Row>
          <Col span={12}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('relationArea')(
                <TextArea rows={4} />
              )}
            </FormItem>
          </Col>
        </Row>

        <div style={{ marginTop: '10px', fontSize: '14px' }}>
        Are any of these concerns currently being addressed by Mediation or a Hearing in the Bureau of Special Education Appeals (BSEA)?
       </div>
        <div style={{ marginBottom: '10px', fontSize: '13px' }}>
          <a href="#">How does this affect my PRS complaint?</a>
        </div>
        <Row>
          <Col span={12}>
            <Button style={{marginRight:'10px'}}>是</Button>
            <Button>否</Button>
          </Col>
        </Row>


        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#000', fontSize: '23px', height: '50px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('Contact')}><Icon type="left" />Back</span>
          <Button style={{ backgroundColor: '#5064C7', color: '#fff', fontSize: '20px',width:'100px', height: '46px',lineHeight:'20px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('District')}>next</Button></div>
      </div>
    )
  }
}
export default Additional;