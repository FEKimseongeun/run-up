import React , {useState, useEffect, useRef}from 'react'
import 'antd/dist/antd.css';
import {TimePicker, Select, Button, Input, Typography} from 'antd';
import Block from "../../../components/Block/Block";
import addClass from "../../../img/addClass.png";
import Buttons from "../../../components/Buttons/Buttons";
import { Link} from "react-router-dom";
import axios from "axios";

import API from "../../api";

//const { TextArea } = Input;
// const format = 'HH:mm';
// const options = [{ value: '월요일' }, { value: '화요일' }, { value: '수요일' }, { value: '목요일' },{ value: '금요일' },{ value: '토요일' },{ value: '일요일' }];
const { Title } = Typography;



function Addclass() {
    // const [state, setState] = useState([
    //     {title: "a"}
    // ]);
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [ClassName, SetClassName] = useState("");
    const [ClassDate, SetClassDate] = useState("");

    const ClassNameHandler = (e) => {
        e.preventDefault();
        SetClassName(e.target.value);
    };

    const ClassDateHandler = (e) => {
        e.preventDefault();
        SetClassDate(e.target.value);
    };

    const fetchAddClass = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            console.log('ClassName : ', ClassName);
            console.log('ClassDate : ', ClassDate);
            axios.post(
                'https://runuptoolcloud22.paas-ta.org/class/teacher/new',{
                    headers:{
                        "Content-Type" : "application/json",
                        'Authorization':localStorage.getItem('JWT')
                    },
                    widthCredentials: true,
                    c_name:ClassName,
                    c_no:1,
                    c_time:ClassDate
                })
                .then(res =>{
                console.log(res.data);
                console.log("성공");// 데이터는 response.data 안에 들어있습니다.
                document.location.href = '/teacher/class-list'}
            )
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };


    return (
        <Block>
            <img className="add-class" src={addClass} style={{float: 'left', width: '50px'}}/>
            <Title>수업 추가</Title>
            <hr></hr>
            <div style={{marginTop: '30px'}}>
                <a href="/teacher/class-list">
                    <Button>←</Button>
                </a>
            </div>
            <form >
                <br/>
                <div style={{width: "80%", margin: "1rem auto"}}>
                    <label>과목/반 : </label>
                    <Input
                        type="text"
                        value={ClassName}
                        onChange={ClassNameHandler}
                        name="c_name"
                    />
                    <hr></hr>

                    <div className="col" style={{margin: "1rem auto"}}>
                                    <label>수업 요일/시간 : </label>
                                    <Input
                                        style={{width: "20%"}}
                                        type="text"
                                        value={ClassDate}
                                        onChange={ClassDateHandler}
                                        name="c_time"
                                    />
                        </div>
                </div>
                    <Buttons text={"추가하기"} onClick={fetchAddClass}/>
            </form>
        </Block>

    );
}

export default Addclass;