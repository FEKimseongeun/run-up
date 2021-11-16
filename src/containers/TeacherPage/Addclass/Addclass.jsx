import React , {useState, useEffect, useRef}from 'react'
import 'antd/dist/antd.css';
import {TimePicker, Select, Button, Input, Typography} from 'antd';
import Block from "../../../components/Block/Block";
import addClass from "../../../img/addClass.png";
import { Link} from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import ReactDOM from "react-dom";

import API from "../../api";

//const { TextArea } = Input;
// const format = 'HH:mm';
// const options = [{ value: '월요일' }, { value: '화요일' }, { value: '수요일' }, { value: '목요일' },{ value: '금요일' },{ value: '토요일' },{ value: '일요일' }];
const { Title } = Typography;



function Addclass() {
    // const [state, setState] = useState([
    //     {title: "a"}
    // ]);
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

    const submitHandler = (e) => {
        e.preventDefault();
        // state에 저장한 값을 가져옵니다.

        let body = {
            c_name: ClassName,
            c_time: ClassDate,
        };

        axios
            .post("https://runuptoolcloud22.paas-ta.org/class/teacher/new",
                {
                    c_name:ClassName,
                    c_time:ClassDate
                })
            .then(function (response){
                console.log(response);
            });
        console.log(ClassName);
        console.log(ClassDate);
    };


    // adds new obj
    // const addObject = () => setState([...state, {title: ""}]);
    // function handleRemove(i) {
    //     const values = [addObject];
    //     values.splice(i, 1);
    //     setState(values);
    // }

    const ref = useRef(null);

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
                        {/*{state.map((item, i) => (*/}
                        {/*    <div key={i}>*/}
                        {/*        <div ref={ref} value={item.title}>*/}
                                    <label>수업 요일/시간 : </label>
                                    <Input
                                        style={{width: "20%"}}
                                        type="text"
                                        value={ClassDate}
                                        onChange={ClassDateHandler}
                                        name="c_time"
                                    />
                        {/*        </div>*/}
                        {/*        <Button type="button" style={{margin: "0.5rem auto"}}*/}
                        {/*                onClick={() => handleRemove(i)}>지우기</Button>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                        {/*<Button type="button" onClick={addObject}>수업시간 추가하기</Button>*/}
                    </div>

                </div>
                <Link to="/teacher/class-list">
                    <Button type="submit" onClick={submitHandler}>
                        추가하기
                    </Button>
                </Link>
            </form>
        </Block>

    );
}

export default Addclass;