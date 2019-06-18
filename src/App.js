import React, { Component } from 'react';
import './App.css';

//Components
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Pages
import Main from 'containers/Main';
import LoginPage from 'containers/LoginPage';
import DashboardPage from 'containers/DashboardPage';

class App extends Component {

  requireAuth = (Comp, props) => {
    if (localStorage.getItem('tokenUser')) {
      return (
          <Comp {...props}/>
      );
    }
    return <Redirect to="/login" />;
  };

  render () {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => <LoginPage {...props} />}
            />
            <Main>
              <Switch>
                <Route
                  exact
                  path="/dashboard"
                  render={props => this.requireAuth(DashboardPage, props)}
                />
              </Switch>
            </Main>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
