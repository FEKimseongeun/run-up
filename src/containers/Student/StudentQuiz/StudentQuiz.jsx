import React, { useState, useEffect } from 'react';
import Block from "../../../components/Block/Block";
import "antd/dist/antd.css";
import "./StudentQuiz.scss";
import QuizTitle from "../../../components/Quiz/QuizTitle";
import {
    Modal,
    Table,
    Space,
    Button,
    Typography, Input,
} from "antd";
import axios from "axios";
import {Link} from "react-router-dom";
import QuestionBox from "./Quizbox";
const { Title } = Typography;



function StudentQuiz() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [Quiz, SetQuiz] = useState("");
    const [Answer, SetAnswer] = useState("");
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);

    const nextQuestion = () => setQuestionIndex(questionIndex => questionIndex + 1)

    useEffect(() => {
        axios.get(
            "https://runuptoolcloud22.paas-ta.org/quiz/getQuizAll/1"
        )
            .then(res => {
                console.log(res.data)
                setQuestions(res.data)
                console.log(questions[0].q_ques)
            })

    }, []);
    let index=0;
    let c_no=1;

    return (
        <div>
            <Block>
                <div className="App">
                    {/*{questions.map((q) =>(*/}
                    {/*    <li key={q.q_no}>*/}
                    {/*        {q.q_ques}*/}
                    {/*    </li>*/}
                    {/*))}*/}
                    <QuestionBox question={questions[index]} nextQuestion={nextQuestion} />
                </div>
                {/*<QuizTitle></QuizTitle>*/}
                {/*<div style={{margin:"3rem auto"}}>*/}
                {/*    <h1> = 3번 = </h1>*/}
                {/*</div>*/}
                {/*<div className="container">*/}
                {/*    <h2>1</h2>*/}
                {/*    <h2>. 문제:  </h2>*/}
                {/*    <h2> 이것과 이것에 대해 설명하시오. </h2>*/}
                {/*</div>*/}
                {/*답:*/}
                {/*<Input*/}
                {/*    style={{width:200}}*/}
                {/*/>*/}
                {/*<Button type="default" href="/student-mypage" style={{backgroundColor:"#F2AA55", color:"white", marginLeft:"4rem"}}>제출</Button>*/}
            </Block>
        </div>
    );
}

export default StudentQuiz;