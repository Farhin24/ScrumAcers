import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StandUpForm from "./StandUpForm";
import StandUpFormView from "./StandUpFormView";
import Loginform from "./components/login";
import Header from "./components/Header";
import Leaves from "./components/Leaves";
import Announcement from "./components/Announcement";
import MyProfile from "./components/ProfileView"

function App() {
  const [email, setemail] = useState("");

  return (
    <Router>
      <div className="App">
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
          <Route exact path="/StandUpForm">
            <StandUpForm />
          </Route>
          <Route exact path="/StandUpFormView">
            <StandUpFormView />
          </Route>
          <Route exact path="/Leaves">
            <Leaves />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
