import React from 'react'
import {
    Modal,
    Table,
    Space,
    Button,
    Typography, Input,
} from "antd";
import {Link} from "react-router-dom";
import './QuizTitle.scss'
import Block from "../Block/Block";


const { Title } = Typography;
const QuizTitle = (props) => {
    return (
        <div className="quiz-title">
            <Title>도덕 3반</Title>
            <h3>퀴즈를 제한시간 내에 풀어주세요!</h3>
        </div>
    )
}

export default QuizTitle