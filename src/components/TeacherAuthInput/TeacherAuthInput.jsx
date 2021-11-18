import React, {useState} from "react";

import './TeacherAuthInput.scss'
import axios from "axios";

const TeacherAuthInput = (props) => {
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


    const fetchTeacherUser = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            console.log('ID : ', inputId);
            console.log('PW : ', inputPw);
            const response = await axios.post(
                'https://runuptoolcloud22.paas-ta.org/user/login',{
                    headers:{
                        "Content-Type" : "application/json",
                    },
                    widthCredentials: true,
                    email:inputId,
                    password:inputPw
                }
            );
            setUsers(response.data);
            console.log(response.data);
            console.log("성공");// 데이터는 response.data 안에 들어있습니다.
            document.location.href = `/student/s-classlist`
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    return (
        <div className="auth-input-component">
            <input style={{
                width: props.width
            }}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TeacherAuthInput