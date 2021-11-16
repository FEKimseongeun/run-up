import React from 'react'
import Block from '../../../components/Block/Block'
import SignStudent from '../../../img/sign_student.png'
import SignTeacher from '../../../img/sign_teacher.png'

import './SignUp.scss'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="signup-container">
            <p>회원가입</p>
            <div className="student-teacher-block">
                <Block>
                    <Link to='/student-signup' style={{textDecoration: 'none'}}>
                        <img className="student-img" src={SignStudent} />
                        <p>나는 학생!</p>
                    </Link>
                </Block>
                <Block>
                    <Link to='/teacher-signup' style={{textDecoration: 'none'}}>
                        <img  className="teacher-img" src={SignTeacher} />
                        <p>나는 선생님!</p>
                    </Link>
                </Block>
            </div>
        </div>
    )
}

export default Signup