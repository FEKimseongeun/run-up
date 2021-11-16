import React from 'react'
import { Route, Switch } from 'react-router'
import Login from './Login/Login'
import Signup from './SignUp/SignUp'
// import FindUsername from './FindUsername/FindUsername'
// import FindPassword from './FindPassword/FindPassword'
// import ResetPassword from './ResetPassword/ResetPassword'
// import StudentSignup from './StudentSignup/StudentSignup'
// import TeacherSignup from './TeacherSignup/TeacherSignup'
import './LoginMainpage.scss'

const LoginMainpage = ({match}) => {

    console.log(match.path)
    return <>
        <div className="loginmainpage-container">
            <Switch>
                <Route path={match.path} exact component={Login} />
                <Route path={`${match.path}/signup`} component={Signup} />
                {/*<Route path={`${match.path}find-username`} component={FindUsername} />*/}
                {/*<Route path={`${match.path}find-password`} component={FindPassword} />*/}
                {/*<Route path={`${match.path}reset-password`} component={ResetPassword} />*/}
                {/*<Route path={`${match.path}student-signup`} component={StudentSignup} />*/}
                {/*<Route path={`${match.path}teacher-signup`} component={TeacherSignup} />*/}
            </Switch>
        </div>
    </>
}

export default LoginMainpage