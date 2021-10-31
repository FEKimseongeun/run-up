import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Mainpage from './containers/Mainpage'


const App = () => {
  return (
    <Switch>
      <Route path='/' component={Mainpage} />
    </Switch>
  )
}

export default App