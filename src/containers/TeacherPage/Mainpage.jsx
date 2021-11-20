import React from 'react'
import { Route, Switch } from 'react-router'
import './Mainpage.scss'

import Classlist from './Classlist/Classlist'
import Addquiz from './Addquiz/Addquiz'
import Addclass from './Addclass/Addclass'
import Updatequiz from './Updatequiz/Updatequiz'
import Detailclass from './Detailclass/Detailclass'
import Teachermypage from './Teachermypage/Teachermypage'
import InviteStudent from './InviteStudent/InviteStudent'

import 'antd/dist/antd.css';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';

const Mainpage = ({match}) => {
    console.log(match.path)
    const name = localStorage.getItem('userName')
    return <>
        <div className="mcontainer">
        <header>
        <nav>
          <div className="menubar">
            <div className="logos">
              <a href="/teacher/class-list">RUN-UP</a>
            </div>
            <div className="menuUserSection">
                {name} 선생님
                <Avatar size="large" icon={<UserOutlined />} />
              <a href="/teacher/teacher-mypage">설정</a>
              <Button type="primary" href='/login'>로그아웃</Button>
            </div>
          </div>
        </nav>
      </header>
            <Switch>
                <Route path={`${match.path}/class-list`} component={Classlist} />
                <Route path={`${match.path}/add-class`} component={Addclass} />
                <Route path={`${match.path}/add-quiz`} component={Addquiz} />
                <Route path={`${match.path}/update-quiz`} component={Updatequiz} />
                <Route path={`${match.path}/detail-class`} component={Detailclass} />
                <Route path={`${match.path}/teacher-mypage`} component={Teachermypage} />
                <Route path={`${match.path}/invite`} component={InviteStudent} />
            </Switch>
        </div>
    </>
}

export default Mainpage