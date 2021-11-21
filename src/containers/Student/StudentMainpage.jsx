import React from 'react'
import { Route, Switch } from 'react-router'
import './StudentMainpage.scss'

import StudentClassList from "./StudentClassList/StudentClassList";
import StudentAtt from "./StudentAtt/StudentAtt";
import StudentQuiz from "./StudentQuiz/StudentQuiz";
import StudentClassHistory from "./StudentClassHistory/StudentClassHistory";
import StudentQuizHistory from "./StudentQuizHistory/StudentQuizHistory";

import 'antd/dist/antd.css';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import InviteStudent from "../TeacherPage/InviteStudent/InviteStudent";

const StudentMainpage = ({match}) => {
    const name = localStorage.getItem('studentName')
    console.log(match.path)
    return <>
        <div className="mainpage-container">
        <header>
        <nav>
          <div className="menubar">
            <div className="logo">
              <a href="/student/s-classlist">RUN-UP</a>
            </div>
            <div className="menuUserSection">
                {name} 학생
                <Avatar size="large" icon={<UserOutlined />} />
              <a href="/student-mypage">설정</a>
              <Button type="default" style={{backgroundColor:"#F2AA55", color:"white"}}>로그아웃</Button>
            </div>
          </div>
        </nav>
      </header>
            <Switch>
                <Route path={`${match.path}/s-classlist`} component={StudentClassList} />
                <Route path={`${match.path}/att-stu`} component={StudentAtt} />
                <Route path={`${match.path}/quiz-stu`} component={StudentQuiz}/>
                <Route path={`${match.path}/s-classhistory`} component={StudentClassHistory}/>
                <Route path={`${match.path}/s-quizhistory`} component={StudentQuizHistory}/>
            </Switch>
        </div>
    </>
}

export default StudentMainpage