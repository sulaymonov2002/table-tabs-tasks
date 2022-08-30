import React from 'react'
import SignUp from './pages/sign-up/sign-up'
import { Switch, Route } from 'react-router-dom'

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="body">
        <Switch>
          <Route path="/sign-up" component={() => <SignUp />} />
        </Switch>
      </div>
    )
  }
}

export default App
