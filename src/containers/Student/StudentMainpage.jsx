import React from 'react'
import { Route, Switch } from 'react-router'
import './StudentMainpage.scss'
import StudentClassList from "./StudentClassList/StudentClassList";

import 'antd/dist/antd.css';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';

const StudentMainpage = ({match}) => {

    console.log(match.path)
    return <>
        <div className="mainpage-container">
        <header>
        <nav>
          <div className="menubar">
            <div className="logo">
              <a href="/s-classlist">RUN-UP</a>
            </div>
            <div className="menuUserSection">
                홍길동 선생님
                <Avatar size="large" icon={<UserOutlined />} />
              <a href="/student-mypage">설정</a>
              <Button type="primary">로그아웃</Button>
            </div>
          </div>
        </nav>
      </header>
            <Switch>
                <Route path={`${match.path}s-classlist`} component={StudentClassList} />
            </Switch>
        </div>
    </>
}

export default StudentMainpage