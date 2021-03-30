import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import TopNavBar from "../component/TopNavBar"
import Home from './components/Home';
import Contact from './components/Contact';
import Additional from './components/Additional';
import District from './components/District';
import StudentOrGroup from './components/StudentOrGroup';
import Concerns from './components/Concerns';
import Aside from './components/Aside';
const FormItem = Form.Item;
class NewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPages: 'Concerns',
    };
  }
  componentDidMount() {
  }

  onSuccesscallbak = (name) => {
    this.setState({
      nowPages: name
    })
  }

  render() {
    let { getFieldDecorator, getFieldValue } = this.props.form;
    let formItemLayout = { labelCol: { span: 5 }, wrapperCol: { span: 12, offset: 1 } };
    const { nowPages } = this.state;
    const pages = [
      { name: 'Home', Components: <Home form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'Contact', Components: <Contact form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'Additional', Components: <Additional form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'District', Components: <District form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'StudentOrGroup', Components: <StudentOrGroup form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'Concerns', Components: <Concerns form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> }
    ]
    return (
      <div>
        <TopNavBar />
        <div className="box" style={{margin:'0 auto', width: '1200px' }}>
          <div style={{ float: 'left', width: '900px' }}>
            <Form>
              <div className="steps-content">
                {pages.length && pages.map((item, index) => {
                  if (item.name === nowPages) {
                    return <div key={index}>{item.Components}</div>
                  }
                })}
              </div>
            </Form>
          </div>
          <div style={{ float: 'left', width: '250px',marginLeft:'50px' }}>
            <Aside />
          </div>
        </div>
      </div>
    )
  }
}
export default Form.create()(NewPage);