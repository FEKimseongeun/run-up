import React from 'react'
import Buttons from '../Buttons/Buttons'
import loginLock from '../../img/login_lock.png'

import './LoginForm.scss'

const LoginForm = (props) => {
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
            <Buttons text={"로그인"}/>
        </div>
    )
}

export default LoginForm