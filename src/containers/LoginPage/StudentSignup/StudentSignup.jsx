import React, {useState} from 'react'
import Block from '../../../components/Block/Block'

import './StudentSignup.scss'
import Signup from '../../../img/signup.png'
import AuthForm from '../../../components/AuthForm/AuthForm'
import AuthInput from '../../../components/AuthInput/AuthInput'
import Buttons from '../../../components/Buttons/Buttons'
import Modal from "../TeacherSignup/Modal";
import axios from "axios";

const StudentSignup = () => {

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
    const [inputGrade, setInputGrade] = useState(0)
    const [inputClass, setInputClass] = useState(0)

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
    }
    const handleInputGender = (e) => {
        setInputGender(e.target.value)
    }
    const handleInputClass = (e) => {
        setInputClass(e.target.value)
    }
    const handleInputGrade = (e) => {
        setInputGrade(e.target.value)
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
            const response = await axios.post(
                'https://runuptoolcloud22.paas-ta.org/student/signupStudent',{
                    headers:{
                        "Content-Type" : "application/json",
                    },
                    widthCredentials: true,
                    s_birth:inputBirth,
                    s_class:inputClass,
                    s_email:inputId,
                    s_gender:true,
                    s_grade:inputGrade,
                    s_id:inputNic,
                    s_name:inputName,
                    s_password:inputPw,
                    s_school:inputSchool
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
        <div className="student-signup-container">
            <Block>
                <div className="student-signup-content">
                    <div className="student-signup-form">
                        <img src={Signup} />
                        <div className="student-signup-text">
                            <p className="student-signup-main">학생 회원가입</p>
                            <p>정보를 입력해주세요</p>
                        </div>
                    </div>
                    <div className="student-signup-first-body">
                        <AuthForm name={"학생 이름"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}}
                                       value={inputName} onChange={handleInputName}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"학생 생년월일"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}}
                                       value={inputBirth} onChange={handleInputBirth}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"학생 성별"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}} placeholder={"여/남"}
                                       value={inputGender} onChange={handleInputGender}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"학생 학교명"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}}
                                       value={inputSchool} onChange={handleInputSchool}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"학생 반"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}}
                                       value={inputClass} onChange={handleInputClass}
                                />
                            </div>
                        </AuthForm>
                        <AuthForm name={"학생 학년"}>
                            <div className="auth-input-component">
                                <input style={{width: "150px"}}
                                       value={inputGrade} onChange={handleInputGrade}
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
                        <AuthForm name={"학생 이메일"}>
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

export default StudentSignup