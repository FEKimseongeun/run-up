import React, {useState} from 'react'
import Block from '../../../components/Block/Block'

import './TeacherSignup.scss'
import Signup from '../../../img/signup.png'
import AuthForm from '../../../components/AuthForm/AuthForm'
import Modal from "./Modal"
import Buttons from '../../../components/Buttons/Buttons'
import TeacherAuthInput from "../../../components/TeacherAuthInput/TeacherAuthInput";
import axios from "axios";


const TeacherSignup = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [inputName, setInputName] = useState('')
    const [inputBirth, setInputBirth] = useState('')
    const [inputSchool, setInputSchool] = useState('')
    const [inputPhone, setInputPhone] = useState('')
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [inputNic, setInputNic] = useState('')
    const [PwCheck, setPwCheck] = useState('')
    const [inputGender, setInputGender] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const handleInputName = (e) => {
        setInputName(e.target.value)
    }
    const handleInputBirth = (e) => {
        setInputBirth(e.target.value)
    }
    const handleInputSchool = (e) => {
        setInputSchool(e.target.value)
    }
    const handleInputPhone = (e) => {
        setInputPhone(e.target.value)
    }
    const handleInputNic = (e) => {
        setInputNic(e.target.value)
    }
    const handlePwCheck = (e) => {
        setPwCheck(e.target.value)
        if(!(inputPw===PwCheck)){
            return (
                <Modal message="비밀번호가 틀립니다." />
            )
        }
    }
    const handleInputGender = (e) => {
        setInputGender(e.target.value)
    }

    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            localStorage.setItem("userName",inputName);
            console.log('ID : ', inputId);
            console.log('PW : ', inputPw);
            const response = await axios.post(
                'https://runuptoolcloud22.paas-ta.org/teacher/signupTeacher',{
                    headers:{
                        "Content-Type" : "application/json",
                    },
                    widthCredentials: true,
                    t_birth:inputBirth,
                    t_email:inputId,
                    t_gender:true,
                    t_id:inputNic,
                    t_name:inputName,
                    t_password:inputPw,
                    t_school:inputSchool
                }
            );
            console.log(response.data);
            console.log("성공");// 데이터는 response.data 안에 들어있습니다.
            document.location.href = '/login'
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

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
                            <div className="auth-input-component">
                                <input style={{width: "150px"}}
                                       value={inputName} onChange={handleInputName}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"선생님 생년월일"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}}
                                       value={inputBirth} onChange={handleInputBirth}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"선생님 성별"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}} placeholder={"여/남"}
                                       value={inputGender} onChange={handleInputGender}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"학교명"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}}
                                       value={inputSchool} onChange={handleInputSchool}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"휴대폰 번호"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}}
                                       value={inputPhone} onChange={handleInputPhone}
                                />
                            </div>
                        </AuthForm>
                    </div>
                    <div className="teacher-signup-second-body">
                        <AuthForm name={"닉네임"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}}
                                       value={inputNic} onChange={handleInputNic}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"비밀번호"}>
                            <div className="auth-input-component">
                                <input style={{width: "220px"}} placeholder={"6~12자 영문/숫자"}
                                       value={inputPw} onChange={handleInputPw}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"비밀번호 확인"}>
                            <div className="auth-input-component">
                                <input style={{width: "220px"}}
                                       value={PwCheck} onChange={handlePwCheck}
                                />
                                {inputPw===PwCheck ? null: <Modal message="비밀번호가 틀립니다." />}
                            </div>
                        </AuthForm>
                        <AuthForm name={"선생님 이메일"}>
                            <div className="auth-input-component">
                                <input style={{width: "200px"}}
                                       value={inputId} onChange={handleInputId}
                                />
                            </div>
                        </AuthForm>
                        <Buttons text="회원가입" onClick={fetchUsers}/>
                    </div>
                </div>
            </Block>
        </div>
    )
}

export default TeacherSignup