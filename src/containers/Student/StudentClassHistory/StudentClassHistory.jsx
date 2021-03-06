import React from "react";
import { Link } from 'react-router-dom'
import Block from "../../../components/Block/Block"
import "antd/dist/antd.css";
import "./StudentClassHistory.scss";
import list from '../../../img/book.png';
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
        classTime: "5월 20일",
        classAtt:"x"
    },
    {
        key: "2",
        className: "3주차",
        classTime: "5월 27일",
        classAtt:"O"
    },
    {
        key: "3",
        className: "4주차",
        classTime: "5월 28일",
        classAtt:"x"
    }
];


function StudentClassHistory() {
    return (
        <div>
            <Block>
                <img className="stu-class-list" src={list} style={{ float: 'left'}}/>
                <Title >도덕</Title>
                <hr></hr>
                <div style={{marginTop:'2rem'}}>
                    <Table dataSource={data}>
                        <Column title="수업주차" dataIndex="className" key="week" />
                        <Column title="날짜" dataIndex="classTime" key="date" />
                        <Column
                            title="출석"
                            dataIndex="classAtt"
                            key="att"

                        />
                    </Table>
                </div>
            </Block>
        </div>
    )
}

export default StudentClassHistory