import React, { useState } from 'react';
import Block from "../../../components/Block/Block";
import "antd/dist/antd.css";
import {
    Modal,
    Table,
    Space,
    Button,
    Typography,
} from "antd";
import {Link} from "react-router-dom";
const { Title } = Typography;


function StudentQuiz() {
    return (
        <div>
            <Block>
                <Title>도덕 3반</Title>
                <h3>퀴즈를 제한시간 내에 풀어주세요!</h3>
                <div style={{margin:"3rem auto"}}>
                    <h1> = 3번 = </h1>
                </div>

            </Block>
        </div>
    );

}

export default StudentQuiz;