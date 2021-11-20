import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { TimePicker,Select, Button, Input, Tooltip } from 'antd';
import moment from 'moment';
import Block from "../../../components/Block/Block";
import AuthForm from "../../../components/AuthForm/AuthForm";
import AuthInput from "../../../components/AuthInput/AuthInput";
import axios from "axios";
import Buttons from "../../../components/Buttons/Buttons";

//const { TextArea } = Input;
const options = [{ value: '서술형' }, { value: '단답형' }, { value: 'OX' }];

function Addquiz(props) {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [Quiz, SetQuiz] = useState("");
    const [Answer, SetAnswer] = useState("");
    const [Time, SetTime] = useState("");
    const [Type, SetType] = useState(false);
    const QuizHandler = (e) => {
        e.preventDefault();
        SetQuiz(e.target.value);
    };
    const TypeHandler = (e) => {
        e.preventDefault();
        SetType(e.target.value);
    };
    const AnswerHandler = (e) => {
        e.preventDefault();
        SetAnswer(e.target.value);
    };
    const TimeHandler = (e) => {
        e.preventDefault();
        SetTime(e.target.value);
    };
    const fetchAddQuiz = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            console.log('Quiz : ', Quiz);
            console.log('Answer : ', Answer);

            var params = new URLSearchParams();
            params.append('c_no', 1);
            params.append('q_ques', Quiz);
            params.append('q_ans', Answer);
            params.append('q_type', true);
            params.append('q_timelimit', Time);

            axios.post(
                'https://runuptoolcloud22.paas-ta.org/quiz/addQuiz',params
                )
                .then(res =>{
                        console.log(res.data);
                        console.log("성공");}// 데이터는 response.data 안에 들어있습니다.
                    //document.location.href = '/teacher/class-list'}
                )
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

  return (  
    <Block>
      <a href="/detail-class">
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
            onChange={QuizHandler}
            value={Quiz}
            type="text"
            name="classtitle"
          />
          <hr></hr>
          <label>퀴즈 답 : </label>
          <Input
            onChange={AnswerHandler}
            value={Answer}
            type="text"
            name="title"
          />
          <hr></hr>
            <label>퀴즈 제한시간(분) : </label>
            <Input defaultValue="1" style={{ width: "50%", margin: "2rem auto" }}
                   onChange={TimeHandler}
                   value={Time}/>
        
    
        </div>
          <Buttons text={"추가하기"} onClick={fetchAddQuiz}/>
      </form>
      </Block>

  );
}

export default Addquiz;
