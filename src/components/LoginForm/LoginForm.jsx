import React, {useEffect,useState} from 'react'
import Buttons from '../Buttons/Buttons'
import loginLock from '../../img/login_lock.png'
import axios from "axios";

import './LoginForm.scss'

const LoginForm = (props) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);

            const response = await axios.post(
                'https://runuptoolcloud22.paas-ta.org/user/login',{
                    headers:{
                        headers: { 'Content-type': 'application/x-www-form-urlencoded', },

                    },
                    email:'kodsad@gmail.com',
                    password:'1234'
                }

            );
            setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };





    return (
        <div className="login-form-container">
            <div className="login-image-status">
                <img src={loginLock} />
                <p className="status-login">{props.user} 로그인</p>
            </div>
            <p className="login-form-notify">아이디(이메일)</p>
            <input className="login-input-form"
                   placeholder={"email"}
            />
            <p className="login-form-notify">비밀번호</p>
            <input className="login-input-form"
                   placeholder={"password"}
            />
            <div className="login-state-store-form">
                <input type="checkbox" />
                <p>로그인 기억하기</p>
            </div>
            <Buttons text={"로그인"} onClick={fetchUsers}/>
        </div>
    )
}

export default LoginForm