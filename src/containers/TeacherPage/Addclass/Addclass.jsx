import React from 'react'
import 'antd/dist/antd.css';
import { TimePicker,Select, Button, Input } from 'antd';
import moment from 'moment';
import Block from "../../../components/Block/Block";

//const { TextArea } = Input;
const format = 'HH:mm';
const options = [{ value: '월요일' }, { value: '화요일' }, { value: '수요일' }, { value: '목요일' },{ value: '금요일' },{ value: '토요일' },{ value: '일요일' }];


function Addclass(props) {
  //const [value, onChange] = useState('10:00');
  //var TimePicker = require('react-gradient-timepicker');
  return (  
    <Block>
      <a href="/">
        <Button>←</Button>
      </a>
      <form onSubmit={props.handleSubmit}>
        <br />
        <div style={{ width: "80%", margin: "2rem auto" }}>
          <label>반 : </label>
          <Input
            onChange={props.handleRegisterChange}
            value={props.classValue}
            type="text"
            name="classtitle"
          />
          <hr></hr>
          <label>수업 이름 : </label>
          <Input
            onChange={props.handleRegisterChange}
            value={props.titleValue}
            type="text"
            name="title"
          />
          <hr></hr>
          <label>수업 날짜 : </label>
          <Select
            mode="multiple"
            showArrow
            defaultValue={['월요일', '수요일']}
            style={{ width: '100%' }}
            options={options}
          />
          <hr></hr>
          <label>수업 시간 : </label>
          <TimePicker.RangePicker 
            defaultValue={moment('13:30', format)}
            onChange={props.handleRegisterChangeTime}
          />
    
        </div>
        <Button type="primary" onClick={props.handleSubmit}>
          {props.updateRequest ? "수정" : "추가하기"}
        </Button>
      </form>
      </Block>

  );
}

export default Addclass;