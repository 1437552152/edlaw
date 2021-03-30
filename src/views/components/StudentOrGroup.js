import React, { Component } from 'react';
import { Button, Form, Input, Row, Checkbox, Col, Select,Icon } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
class StudentOrGroup extends Component {
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
        <h1 style={{ marginTop: '100px', fontSize: '30px' }}>Student or Group Details</h1>
        <Row>
          <Col span={13}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('language')(
                <Select placeholder="Please">
                  <Option value="china">China</Option>
                  <Option value="usa">English</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          Do any of the following apply to the student?
       </div>
        <Row>
          <Col span={24}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('relationship')(
                <Checkbox.Group>
                  <Row>
                    <Col span={24}>
                      <Checkbox value="A" style={{ lineHeight: '32px' }}>
                        The student has an IEP (individualized education plan)
                     </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="B" style={{ lineHeight: '32px' }}>
                        The student has a 504 plan
                     </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="C" style={{ lineHeight: '32px' }}>
                        The student is home schooled
                     </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="D" style={{ lineHeight: '32px' }}>
                        The student is being educated through a Home Hospital Program
                     </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              )}
            </FormItem>
          </Col>
        </Row>

        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#000', fontSize: '23px', height: '50px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('District')}><Icon type="left" />Back</span>
          <Button style={{ backgroundColor: '#5064C7', color: '#fff', fontSize: '20px', width: '100px', height: '46px', lineHeight: '20px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('Concerns')}>next</Button></div>
      </div>
    )
  }
}
export default StudentOrGroup;