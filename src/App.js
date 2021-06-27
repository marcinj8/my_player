import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import { SplashScreenPage } from "./splashScreenPage";
import { AuthPage } from './auth';
import { useAuth } from "./shared/hooks/useAuth";
import AuthContext from "./auth/authentication/authContext";
import { PlayListPage } from "./playListPage";
import { Navigation } from "./navigation";

function App() {

  let routes;
  let token = false;

  const { userData, login, logout } = useAuth();
  token = userData.token;

  const authContexData = {
    fullName: userData.fullName,
    token,
    tokenExpiration: userData.tokenExpiration,
    accountType: userData.accountType,
    login,
    logout
  }

  if (token) {
    routes = (
      <Switch>
        <Route path="/playlists">
          <PlayListPage />
        </Route>
        <Route path="/login/:userType">
          <AuthPage />
        </Route>
        <Redirect to="/playlists" />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/login/:userType">
          <AuthPage />
        </Route>
        <Route exact path="/">
          <SplashScreenPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <div className="App">
      <AuthContext.Provider value={authContexData}>
        <Router>
          <Navigation />
          {routes}
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
