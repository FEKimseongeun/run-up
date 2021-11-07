import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Mainpage from './containers/TeacherPage/Mainpage'
import StudentMainpage from "./containers/Student/StudentMainpage";

const App = () => {
  return (
    <Switch>
      <Route path='/teacher' component={Mainpage} />
        <Route path='/student' component={StudentMainpage} />
    </Switch>
  )
}

export default App