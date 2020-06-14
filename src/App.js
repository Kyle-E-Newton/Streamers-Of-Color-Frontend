import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import AppHeader from './Banner/AppHeader';
import Home from "./Home/Home";
import Submit from "./Submit/Submit";
import Report from "./Report/Report";
import ModerationHome from "./Moderation/Home/Moderation-Home";
import Login from "./Moderation/Login/Login";
import Donate from "./Statics/Donate";
import TOS from "./Statics/TOS";
import Copyright from "./Statics/Copyright";
import AppFooter from "./Banner/AppFooter";

function App() {
  return (
    <div className={"app"}>
      <div className={"app-header"}>
          <AppHeader />
      </div>
      <div className={"app-body"}>
          <HashRouter basename={"/Streamers-Of-Color-Frontend"}>
              <Route path={"/"} component={Home}/>
              <Route path={"/submit"} component={Submit}/>
              <Route path={"/report"} component={Report}/>
              <Route path={"/moderation"} component={ModerationHome}/>
              <Route path={"/login"} component={Login}/>
              <Route path={"/donate"} component={Donate}/>
              <Route path={"/terms-of-service"} component={TOS}/>
              <Route path={"/copyright"} component={Copyright}/>
          </HashRouter>
      </div>
        <div className={"app-footer"}>
            <AppFooter />
        </div>
    </div>
  );
}

export default App;
