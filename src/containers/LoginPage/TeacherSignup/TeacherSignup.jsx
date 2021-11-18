import React from 'react'
import Block from '../../../components/Block/Block'

import './TeacherSignup.scss'
import Signup from '../../../img/signup.png'
import AuthForm from '../../../components/AuthForm/AuthForm'
import AuthInput from '../../../components/AuthInput/AuthInput'
import Button from '../../../components/Buttons/Buttons'


const TeacherSignup = () => {
    return (
        <div className="teacher-signup-container">
            <Block>
                <div className="teacher-signup-content">
                    <div className="teacher-signup-form">
                        <img src={Signup} />
                        <div className="teacher-signup-text">
                            <p className="teacher-signup-main">선생님 회원가입</p>
                            <p>정보를 입력해주세요</p>
                        </div>
                    </div>
                    <div className="teacher-signup-first-body">
                        <AuthForm name={"선생님 이름"}>
                            <AuthInput />
                        </AuthForm>
                        <AuthForm name={"선생님 생년월일"}>
                            <AuthInput />
                        </AuthForm>
                        <AuthForm name={"학교명"}>
                            <AuthInput />
                        </AuthForm>
                        <AuthForm name={"휴대폰 번호"}>
                            <AuthInput />
                        </AuthForm>
                    </div>
                    <div className="teacher-signup-second-body">
                        <AuthForm name={"아이디"}>
                            <AuthInput />
                        </AuthForm>
                        <AuthForm name={"비밀번호"}>
                            <AuthInput  placeholder="(6~12자 / 영문,숫자 필수)" />
                        </AuthForm>
                        <AuthForm name={"비밀번호 확인"}>
                            <AuthInput/>
                        </AuthForm>
                        <AuthForm name={"선생님 이메일"}>
                            <AuthInput />
                        </AuthForm>
                        <Button text="회원가입"/>
                    </div>
                </div>
            </Block>
        </div>
    )
}

export default TeacherSignup