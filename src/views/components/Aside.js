import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
const FormItem = Form.Item;
// import '../../styles/index.css';
class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }
  render() {
    console.log(this.props.id);
    const list = [
      { id: 1, name: 'Home' },
      { id: 2, name: 'Contact Info' },
      { id: 3, name: 'Additional Info' },
      { id: 4, name: 'District and School' },
      { id: 5, name: 'Student or Group Details' },
      { id: 6, name: 'Concerns' }
    ]
    return (
      <div style={{ marginTop: '100px', border: '1px solid #eee', backgroundColor: "#fff" }} className="aside">
        <ul>
          {list.map(item => {
            return <li className={item.id == this.props.id ? 'active': ''}>{item.name}</li>
          })}

        </ul>
      </div>
    )
  }
}
export default Aside;