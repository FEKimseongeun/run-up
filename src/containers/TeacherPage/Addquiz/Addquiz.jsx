import React from 'react'
import 'antd/dist/antd.css';
import { TimePicker,Select, Button, Input } from 'antd';
import moment from 'moment';
import Block from "../../../components/Block/Block";

//const { TextArea } = Input;
const options = [{ value: '서술형' }, { value: '단답형' }, { value: 'OX' }];


function Addquiz(props) {

  return (  
    <Block>
      <a href="/">
        <Button>←</Button>
      </a>
      <form onSubmit={props.handleSubmit}>
        <br />
        <div style={{ width: "80%", margin: "2rem auto" }}>
        <label>퀴즈 형태 : </label>
            <Select
                showArrow
                defaultValue={['서술형']}
                style={{ width: '100%' }}
                options={options}
            />
          <hr></hr>
          <label>퀴즈 문제 : </label>
          <Input
            onChange={props.handleRegisterChange}
            value={props.classValue}
            type="text"
            name="classtitle"
          />
          <hr></hr>
          <label>퀴즈 답 : </label>
          <Input
            onChange={props.handleRegisterChange}
            value={props.titleValue}
            type="text"
            name="title"
          />
          <hr></hr>
          
        
    
        </div>
        <Button type="primary" onClick={props.handleSubmit}>
          {props.updateRequest ? "수정" : "추가하기"}
        </Button>
      </form>
      </Block>

  );
}

export default Addquiz
