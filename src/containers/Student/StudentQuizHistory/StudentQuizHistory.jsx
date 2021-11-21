import React from "react";
import { Link } from 'react-router-dom'
import Block from "../../../components/Block/Block"
import "antd/dist/antd.css";
import "./StudentQuizHistory.scss";
import stu_quiz from '../../../img/quiz_stu.png';
import {
    Table,
    Space,
    Button,
    Typography,
} from "antd";
const { Title } = Typography;
const { Column } = Table;

const data = [
    {
        key: "1",
        className: "김성은",
        classTime: "2",
        classAtt:"x"
    },
    {
        key: "2",
        className: "홍길동",
        classTime: "2",
        classAtt:"x"
    },
];


function StudentQuizHistory() {
    return (
        <div>
            <Block>
                <h1 >도덕</h1>
                <Title >퀴즈 문제 1번 : 1+1은? </Title>
                <hr></hr>
                <div style={{marginTop:'2rem'}}>
                    <Table dataSource={data}>
                        <Column title="퀴즈 제출한 사람" dataIndex="className" key="week" />
                        <Column title="입력 답" dataIndex="classTime" key="date" />
                    </Table>
                </div>
            </Block>
        </div>
    )
}

export default StudentQuizHistory