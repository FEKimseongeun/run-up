import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Input, Typography} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Block from "../../../components/Block/Block";
import invite from "../../../img/invite.png";
import Buttons from "../../../components/Buttons/Buttons";
import axios from "axios";
const { Title } = Typography;

function InviteStudent() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [inputEmail1, setInputEmail1] = useState('')
    const [inputEmail2, setInputEmail2] = useState('')
    const [inputEmail3, setInputEmail3] = useState('')


    const handleEmail1 = (e) => {
        setInputEmail1(e.target.value)
    }
    const handleEmail2 = (e) => {
        setInputEmail2(e.target.value)
    }
    const handleEmail3 = (e) => {
        setInputEmail3(e.target.value)
    }

    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            console.log('1 : ', inputEmail1);
            console.log('2 : ', inputEmail2);
            console.log('3 : ', inputEmail3);

            let body=[inputEmail1,inputEmail2,inputEmail3]
            console.log(JSON.stringify(body))
            console.log(localStorage.getItem("login-token"))
            await axios.post(
                'https://runuptoolcloud22.paas-ta.org/class/teacher/email/1',{
                    headers:{
                        'Authorization': localStorage.getItem("login-token"),
                    },
                    widthCredentials: true,
                    c_name:'수학1반',
                    email:body,
                    inviteURL:'http://localhost:3000/login/1'
                }
            );
            console.log("성공");// 데이터는 response.data 안에 들어있습니다.
            document.location.href = '/login'
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };
    return (
        <div>
            <Block>
                <img className="invite" src={invite} style={{ float: 'left', width:'50px'}}/>
                <Title >수업 추가</Title>
                <hr></hr>
            <div
                id="inviteInput"
                style={{
                    height: 400,
                    width: 500,
                    padding: '0 16px',
                    margin:'2rem auto'
                    
                }}
            >
                <div style={{fontSize:'30px'}}>
                    초대할 학생 이메일 입력
                    <button type="email" onClick={fetchUsers}>초대하기</button>
                </div>

                    <Input placeholder="이메일 입력" prefix={<UserOutlined />} style={{margin:'1rem auto'}} value={inputEmail1} onChange={handleEmail1}/>
                    <Input placeholder="이메일 입력" prefix={<UserOutlined />}style={{margin:'1rem auto'}} value={inputEmail2} onChange={handleEmail2}/>
                    <Input placeholder="이메일 입력" prefix={<UserOutlined />} style={{margin:'1rem auto'}} value={inputEmail3} onChange={handleEmail3}/>
            </div>

            </Block>
        </div>
    )
}

export default InviteStudent;


