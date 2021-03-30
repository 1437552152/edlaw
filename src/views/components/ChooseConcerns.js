import React, { Component } from 'react';
import { Button, Form, Input, Row, Col, Select, Icon, Radio } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
class ChooseConcerns extends Component {
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
        <h1 style={{ marginTop: '100px', fontSize: '30px' }}>Choose the subject(s) of your concern</h1>
        <div style={{ marginTop: '20px', fontSize: '14px' }}>
          If you select more than one, you will be taken through each guide consecutively.
       </div>

        <FormItem
          label="" {...formItemLayout} style={{ marginTop: '60px' }}>
          {getFieldDecorator('one')(
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a" style={{ marginRight: "40px" }}>Discipline</Radio.Button>
              <Radio.Button value="b" style={{ marginRight: "40px" }}>Bullying</Radio.Button>
              <Radio.Button value="c">Special Education</Radio.Button>
            </Radio.Group>
          )}
        </FormItem>
        <div style={{ marginBottom: '10px', fontSize: '13px' }}>
          <a href="#">What falls under these categories?</a>
        </div>

        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#000', fontSize: '23px', height: '50px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('Concerns')}><Icon type="left" />Back</span>
          <Button style={{ backgroundColor: '#5064C7', color: '#fff', fontSize: '20px', width: '100px', height: '46px', lineHeight: '20px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('last')}>提交</Button></div>
      </div>
    )
  }
}
export default ChooseConcerns;