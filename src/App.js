import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import StandUpForm from './StandUpForm';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route exact path= "/">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Route>
      <Route exact path="/StandUpForm">
          <StandUpForm/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
