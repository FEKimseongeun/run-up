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

    const fetchUsers =  () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            console.log('1 : ', inputEmail1);
            console.log('2 : ', inputEmail2);
            console.log('3 : ', inputEmail3);
            let inviteURL1 = 'http://localhost:3000/login/1';
            let c_name1 = '수학1반';
            let body=inputEmail1;

            const email=inputEmail1;
            const c_name=c_name1;
            const inviteURL=inviteURL1
            const data={
                email,c_name,inviteURL
            }


            console.log(body)
            console.log(c_name1)
            console.log(inviteURL1)
            axios.post(
                'https://runuptoolcloud22.paas-ta.org/class/teacher/email',{
                    email:email,
                    c_name:c_name,
                    inviteURL:inviteURL
                    // email:body,
                    // c_name:c_name,
                    // inviteURL:inviteURL
                },{
                    header:{
                        "Content-Type" : "application/json",
                    },
                    widthCredentials: true,
                }
            )
                .then(res =>{
                console.log("res.data: " + res.data);

                })
                .catch(ex=>{
                    console.log("requset fail : " + ex.message);
                })
                .finally(()=>{console.log("dd")}
                        //document.location.href = `/teacher/class-list`}
                    //document.location.href = `/teacher/class-list`}
                );
        }catch(e){
            console.log(e.message);
        };
        setLoading(false);
    };
    return (
        <div>
            <Block>
                <img className="invite" src={invite} style={{ float: 'left', width:'50px'}}/>
                <Title >학생 초대</Title>
                <hr></hr>
            <div
                id="inviteInput"
                style={{
                    height: 400,
                    width: 500,
                    padding: '0 16px',
                    margin:'5rem auto'
                    
                }}
            >
                <div style={{fontSize:'30px'}}>
                    초대할 학생 이메일 입력
                </div>
                <Buttons text={'초대하기'} onClick={fetchUsers}/>
                    <Input placeholder="이메일 입력" prefix={<UserOutlined />} style={{margin:'1rem auto'}} value={inputEmail1} onChange={handleEmail1}/>
                     </div>

            </Block>
        </div>
    )
}

export default InviteStudent;


