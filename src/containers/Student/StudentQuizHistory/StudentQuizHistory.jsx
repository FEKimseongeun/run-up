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
        className: "2주차",
        classTime: "화요일 1-3시 | 수요일 2-5시",
        classAtt:"x"
    },
    {
        key: "2",
        className: "2주차",
        classTime: "화요일 1-3시 | 수요일 2-5시",
        classAtt:"x"
    },
    {
        key: "3",
        className: "2주차",
        classTime: "화요일 1-3시 | 수요일 2-5시",
        classAtt:"x"
    }
];


function StudentQuizHistory() {
    return (
        <div>
            <Block>
                <img className="stu-class-list" src={stu_quiz} style={{ width:"60px", float: 'left'}}/>
                <Title >도덕</Title>
                <hr></hr>
                <div style={{marginTop:'2rem'}}>
                    <Table dataSource={data}>
                        <Column title="퀴즈" dataIndex="className" key="week" />
                        <Column title="날짜" dataIndex="classTime" key="date" />
                    </Table>
                </div>
            </Block>
        </div>
    )
}

export default StudentQuizHistory