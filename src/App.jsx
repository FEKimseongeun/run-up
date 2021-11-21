import React,{useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import Mainpage from './containers/TeacherPage/Mainpage'
import StudentMainpage from "./containers/Student/StudentMainpage";
import LoginMainpage from "./containers/LoginPage/LoginMainpage";

const App = () => {
    const [message, setMessage] = useState("");

    return (
    <Switch>
        <Route path='/login' component={LoginMainpage} />
      <Route path='/teacher' component={Mainpage} />
      <Route path='/student' component={StudentMainpage} />
    </Switch>
  )
}

export default App