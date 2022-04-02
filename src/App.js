import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loginform from "./components/login";
import Header from "./components/Header";
import Leaves from "./components/Leaves";
import Announcement from "./components/Announcement";
import ManagerBadgeView from "./components/ManagerBadgeView";
import MyProfile from "./components/ProfileView"
import Employee from "./components/Employee";
import StandUpFormParent from "./components/StandUpForm/StandUpFormParent";
import { StylesProvider } from '@mui/styles';

function App() {
  const [email, setemail] = useState("");

  return (
    <Router>
      
      <div className="App">
        <StylesProvider injectFirst>
        <Header />
        <Switch>
          <Route exact path="/">
            <Loginform email={email} setemail={setemail} />
          </Route>
          <Route exact path="/">
            <Loginform />
          </Route>
          <Route exact path="/MyProfile">
            <MyProfile/>
          </Route>
          <Route exact path="/Announcement">
            <Announcement />
          </Route>
          <Route exact path="/StandUpFormParent">
            <StandUpFormParent/>
          </Route>
          <Route exact path="/Leaves">
            <Leaves />
          </Route>
          <Route exact path="/ManagerBadgeViews">
            <ManagerBadgeView />
            </Route>
          <Route exact path="/Employee">
            <Employee />
          </Route>
        </Switch>
        </StylesProvider>
      </div>
      
    </Router>
  );
}

export default App;
