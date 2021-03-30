import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import TopNavBar from "../component/TopNavBar"
import Home from './components/Home';
import Contact from './components/Contact';
import Additional from './components/Additional';
import District from './components/District';
import StudentOrGroup from './components/StudentOrGroup';
import Concerns from './components/Concerns';
import IntroducingConcern from './components/IntroducingConcern';
import ChooseConcerns from './components/ChooseConcerns';

import Aside from './components/Aside';
const FormItem = Form.Item;
class NewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPages: 'Home',
    };
  }
  componentDidMount() {
  }
  onSuccesscallbak = (name) => {
    const { form } = this.props;
    if (name == 'last') {
      form.validateFieldsAndScroll((err, values) => { 
        if (!err) {
           console.log(values)
        } else { 
          console.log("失败")
        }
      })
     } else { 
      this.setState({
        nowPages: name
      })
    }
  }

  render() {
    let { getFieldDecorator, getFieldValue } = this.props.form;
    let formItemLayout = { labelCol: { span: 5 }, wrapperCol: { span: 12, offset: 1 } };
    const { nowPages } = this.state;
    const pages = [
      { name: 'Home', id: 1, Components: <Home form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'Contact', id: 2, Components: <Contact form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'Additional', id: 3, Components: <Additional form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'District', id: 4, Components: <District form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'StudentOrGroup', id: 5, Components: <StudentOrGroup form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'Concerns', id: 6, Components: <Concerns form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'IntroducingConcern', id: 6, Components: <IntroducingConcern form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> },
      { name: 'ChooseConcerns', id: 7, Components: <ChooseConcerns form={this.props.form} onSuccesscallbak={this.onSuccesscallbak} /> }
    ];
    let id = 0;
    pages.map(item => { 
      if (item.name == nowPages) { 
        id=item.id
      }
    })
    return (
      <div>
        <TopNavBar />
        <div className="box" style={{margin:'0 auto', width: '1200px' }}>
          <div style={{ float: 'left', width: '900px' }}>
            <Form>
              <div className="steps-content">
                {pages.length && pages.map((item, index) => {
                  return <div key={index} style={{ display: item.name === nowPages ? 'block' : 'none' }}>{item.Components}</div>
                })}
              </div>
            </Form>
          </div>
          <div style={{ float: 'left', width: '250px',marginLeft:'50px' }}>
            <Aside id={id}/>
          </div>
        </div>
      </div>
    )
  }
}
export default Form.create()(NewPage);