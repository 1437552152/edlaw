import React, { Component } from 'react';
import { Button, Form, Input, Row, Col, Select,Icon } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
class District extends Component {
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
        <h1 style={{ marginTop: '100px', fontSize: '30px' }}>District and School</h1>
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          Please fill in the student's school district:
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
          Please fill in the school that the student attends:
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

        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#000', fontSize: '23px', height: '50px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('Additional')}><Icon type="left" />Back</span>
          <Button style={{ backgroundColor: '#5064C7', color: '#fff', fontSize: '20px',width:'100px', height: '46px',lineHeight:'20px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('StudentOrGroup')}>next</Button></div>
      </div>
    )
  }
}
export default District;