import React , {useState, useEffect, useRef}from 'react'
import 'antd/dist/antd.css';
import {TimePicker, Select, Button, Input, Typography} from 'antd';
import moment from 'moment';
import ReactDOM from "react-dom";
import Block from "../../../components/Block/Block";
import addClass from "../../../img/addClass.png";

//const { TextArea } = Input;
const format = 'HH:mm';
const options = [{ value: '월요일' }, { value: '화요일' }, { value: '수요일' }, { value: '목요일' },{ value: '금요일' },{ value: '토요일' },{ value: '일요일' }];
const { Title } = Typography;
function Addclass(props) {
  const [fields, setFields] = useState([{ value: null }]);

  const [state, setState] = useState([
    { title: "a" }
  ]);
  // adds new obj
  const addObject = () => setState([...state, { title: "" }]);
  function handleRemove(i) {
    const values = [addObject];
    values.splice(i, 1);
    setState(values);
  }

  const ref = useRef(null);

  return (  
    <Block>
      <img className="add-class" src={addClass} style={{ float: 'left', width:'50px'}}/>
      <Title >수업 추가</Title>
      <hr></hr>
      <div style={{marginTop:'30px'}}>
        <a href="/teacher">
          <Button>←</Button>
        </a>
      </div>
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

          <div className="col" >
            {state.map((item, i) => (
                <div key={i}>
                  <div ref={ref} value={item.title}>
                  <label>수업 요일/시간 : </label>
                  <Select
                      showArrow
                      defaultValue={['월요일']}
                      style={{ width: '20%', marginRight:"15px" }}
                      options={options}
                  />
                  시작시간:
                  <TimePicker defaultValue={moment('12:08', format)} format={format} style={{ marginLeft:"15px", marginRight:"15px" }}/>
                  끝나는시간:
                  <TimePicker defaultValue={moment('12:08', format)} format={format} style={{ marginLeft:"15px", marginRight:"15px" }}/>
                  {/*<input type="text" ref={ref} value={item.title} />*/}
                  </div>
                  <Button type="button" style={{ margin: "0.5rem auto" }} onClick={() => handleRemove(i)}>지우기</Button>
                </div>
            ))}
            <Button type="button" onClick={addObject}>수업시간 추가하기</Button>
          </div>

          {/*<label>수업 날짜 : </label>*/}
          {/*<hr></hr>*/}
          {/*<label>수업 시간 : </label>*/}
          {/*<TimePicker.RangePicker */}
          {/*  defaultValue={moment('13:30', format)}*/}
          {/*  onChange={props.handleRegisterChangeTime}*/}
          {/*/>*/}
    
        </div>
        <Button type="primary" onClick={props.handleSubmit}>
          {props.updateRequest ? "수정" : "추가하기"}
        </Button>
      </form>
      </Block>

  );
}

export default Addclass;