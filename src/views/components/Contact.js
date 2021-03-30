import React, { Component } from 'react';
import { Button, Form, Input, Row, Col,Icon } from 'antd';
const FormItem = Form.Item;
class Contact extends Component {
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
        <h1 style={{ marginTop: '100px', fontSize: '30px' }}>Contact Info</h1>
        <div style={{ marginTop: '10px', marginBottom: '10px', fontSize: '18px' }}>
          The PRS officer will only contact you using the information you provide below.
       </div>
        <Row>
          <Col span={12}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('firstName')(
                <Input placeholder="First name" style={{ width: '100%', padding: "10px" }} />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('LastName')(
                <Input placeholder="Last name" style={{ width: '100%', padding: "10px" }} />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('Phone')(
                <Input placeholder="Phone" style={{ width: '100%', padding: "10px" }} />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('email')(
                <Input placeholder="E-mail" style={{ width: '100%', padding: "10px" }} />
              )}
            </FormItem>  </Col>
          <Col span={12}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('Address')(
                <Input placeholder="Address" style={{ width: '100%', padding: "10px" }} />
              )}
            </FormItem>  </Col>
          <Col span={12}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('city')(
                <Input placeholder="city" style={{ width: '100%', padding: "10px" }} />
              )}
            </FormItem>  </Col>
          <Col span={12}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('state')(
                <Input placeholder="state" style={{ width: '100%', padding: "10px" }} />
              )}
            </FormItem>  </Col>
          <Col span={12}>
            <FormItem
              label="" {...formItemLayout}>
              {getFieldDecorator('Zip')(
                <Input placeholder="Zip" style={{ width: '100%', padding: "10px" }} />
              )}
            </FormItem>  </Col>
        </Row>
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#000', fontSize: '23px', height: '50px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('Home')}><Icon type="left" />back</span>
          <Button style={{ backgroundColor: '#5064C7', color: '#fff', fontSize: '20px',width:'100px', height: '46px',lineHeight:'20px' }} onClick={() => this.props.onSuccesscallbak && this.props.onSuccesscallbak('StudentOrGroup')}>next</Button></div>
      </div>
    )
  }
}
export default Contact;