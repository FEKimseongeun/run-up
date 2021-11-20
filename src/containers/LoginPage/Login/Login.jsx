import React from "react";
import LoginForm from "../../../components/LoginForm/LoginForm";
import LoginFormTeacher from "../../../components/LoginFormTeacher/LoginFormTeacher";
import './Login.scss'
import Buttons from "../../../components/Buttons/Buttons";

const Login = () => {
    return (
        <div className="login-container">
            <div className="mainpage-login-container">
                <LoginForm user={"학생"}/>
                <div className= "mainpage-vertical-line" />
                <LoginFormTeacher user={"선생님"}/>
            </div>
            <div className="mainpage-auth-container">
                <Buttons link="/find-username" text={"아이디 찾기"} />
                <div className= "mainpage-vertical-line" />
                <Buttons link="/find-password" text={"비밀번호 찾기"} />
                <div className= "mainpage-vertical-line" />
                <Buttons link="/login/signup" text={"회원가입"} />
            </div>
        </div>
    )
}

export default Login