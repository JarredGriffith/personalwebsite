import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/navbar"
import {
  //need to get thing from the react router. 
  BrowserRouter as Router,
  Switch,
  // Route, 
  // Link, 
  // useRouteMatch
} from 'react-router-dom'; 
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div>
    <Container className="mid-background">
      <br/>
    <NavBar/>
    <div>
      <br/>
    <Router>
      <Switch>
        {/* <Route path="/players" exact component={PlayerList}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/> */}
      </Switch>
    </Router>
    
    </div>
    </Container>
    </div>
  );
}

export default App;
