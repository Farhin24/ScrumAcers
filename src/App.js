import React,{useState} from "react";
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import StandUpForm from './StandUpForm';
import StandUpFormView from './StandUpFormView'
import Loginform from "./components/login";
import Header from './components/Header'
import Leaves from "./components/Leaves";


function App() {
  const [email,setemail] = useState("");
 
  return (
    
    <Router>
      <Header/>
      <Switch>
      <Route exact path= "/">
      <Loginform email={email} setemail={setemail}/>
      </Route>
      <Route exact
            path="/"> 
            <Loginform />
          </Route>
      <Route exact path="/StandUpForm">
          <StandUpForm/>
      </Route>
      <Route exact path="/StandUpFormView">
          <StandUpFormView/>
      </Route>
      <Route exact path="/Leaves">
          <Leaves/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
