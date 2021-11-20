import React, {useEffect,useState} from 'react'
import Buttons from '../Buttons/Buttons'
import loginLock from '../../img/login_lock.png'
import axios from "axios";

import './LoginFormTeacher.scss'

const LoginFormTeacher = (props) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')


    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const fetchUsers = async () => {

        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            console.log('ID : ', inputId);
            console.log('PW : ', inputPw);
            axios.post("https://runuptoolcloud22.paas-ta.org/user/login" ,{
                header: {
                    "Content-Type": `application/json`,
                },
                widthCredentials: true,
                email:inputId,
                password:inputPw})
                .then(res =>{
                    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
                    localStorage.setItem("JWT", `Bearer ${res.data.token}`);
                    console.log("res.data.accessToken : " + `Bearer ${res.data.token}`);
                })
                .catch(ex=>{
                    console.log("login requset fail : " + ex);
                })
                .finally(()=>{console.log("login request end")
                        document.location.href = `/teacher/class-list`}

                    );
        }catch(e){
            console.log(e);
        }
        //     const response = await axios.post(
        //         'https://runuptoolcloud22.paas-ta.org/user/login',{
        //             headers:{
        //                 "Content-Type" : "application/json",
        //             },
        //             widthCredentials: true,
        //             email:inputId,
        //             password:inputPw
        //         }
        //     )
        //
        //     // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        //     localStorage.setItem('jwt', response.data.token);
        //     axios.defaults.headers.common['Authorization'] = `${response.data.token}`;
        //     setUsers(response.data);
        //     console.log(`${response.data.token}`);
        //     console.log("성공");// 데이터는 response.data 안에 들어있습니다.
        //     //document.location.href = `/teacher/class-list`
        // } catch (e) {
        //     setError(e);
        // }
        setLoading(false);
    };





    return (
        <div className="login-form-container">
            <div className="login-image-status">
                <img src={loginLock} />
                <p className="status-login">{props.user} 로그인</p>
            </div>
            <p className="login-form-notify">아이디(이메일)</p>
            <input className="login-input-form" name="input_id"
                   placeholder={"email"} value={inputId} onChange={handleInputId}
            />
            <p className="login-form-notify">비밀번호</p>
            <input className="login-input-form" name="input_password"
                   placeholder={"password"} value={inputPw} onChange={handleInputPw}
            />
            <div className="login-state-store-form">

            </div>
            <Buttons text={"로그인하기"} onClick={fetchUsers}/>
        </div>
    )
}

export default LoginFormTeacher