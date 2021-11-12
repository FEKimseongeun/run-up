import React from "react";
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
const { Title } = Typography;
const { Column } = Table;

const data = [
    {
        key: "1",
        className: "도덕",
        classTime: "화요일 1-3시 | 수요일 2-5시"
    },
    {
        key: "2",
        className: "수학",
        classTime: "화요일 1-3시 | 수요일 2-5시"
    },
    {
        key: "3",
        className: "과학",
        classTime: "화요일 1-3시 | 수요일 2-5시"
    }
];


function StudentClassList() {


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