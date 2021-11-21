import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import Block from "../../../components/Block/Block"
import "antd/dist/antd.css";
import "./StudentClassList.scss";
import list from '../../../img/book.png';
import {
    Table,
    Space,
    Button,
    Typography,
} from "antd";
import axios from "axios";
const { Title } = Typography;
const { Column } = Table;


function StudentClassList() {
    const [info, setInfo]=useState([]);
    const [selected,setSelected] =useState('');
    const [modalOn, setModalOn] = useState(false);
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const data = [

    ];

    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            console.log(localStorage.getItem('JWT'))
            axios.get("https://runuptoolcloud22.paas-ta.org/class/student" ,{
                header: {
                    "Content-Type": `application/json`,
                    'Authorization':localStorage.getItem('JWT')
                },
                widthCredentials: true,
            })
                .then(res =>{
                    setInfo(res.data)
                    console.log(res.data)
                })
                .catch(ex=>{
                    console.log(" requset fail : " + ex);
                })
                .finally(()=>{console.log("login request end")}
                    //document.location.href = `/teacher/class-list`}
                );
        }catch(e){
            console.log(e);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <div>
            <Block>
                <img className="stu-class-list" src={list} style={{ float: 'left'}}/>
                <Title >수업 전체보기</Title>
                <hr></hr>
                <div style={{marginTop:'2rem'}}>
                    <Table dataSource={data}>
                        <Column title="수업이름" dataIndex="className" key="age" />
                        <Column title="수업 시간" dataIndex="classTime" key="address" />
                        <Column
                            title="출석하기/수업상세"
                            key="action"
                            render={(text, record) => (
                                <Space size="middle">
                                    <Link to="/student/att-stu">
                                        <Button type="default" shape="round" style={{backgroundColor:"#F2AA55", color:"white", float:"right"}}>출석하기</Button>
                                    </Link>
                                    <Link to="/student/s-classhistory">
                                        <Button type="default" shape="round" style={{backgroundColor:"#FFFAF6"}}>수업 활동</Button>
                                    </Link>
                                    <Link to="/student/s-quizhistory">
                                        <Button type="default" shape="round" style={{backgroundColor:"#FFFAF6"}}>퀴즈 활동</Button>
                                    </Link>
                                </Space>
                            )}
                        />
                    </Table>
                </div>
            </Block>
        </div>
    )
}

export default StudentClassList