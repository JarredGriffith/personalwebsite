import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/navbar"
import {
  //need to get thing from the react router. 
  BrowserRouter as Router,
  Switch,
  Route, 
  // Link, 
  // useRouteMatch
} from 'react-router-dom'; 
import Container from 'react-bootstrap/Container'
import homePage from './components/Home/Mainhome'
import Menu from './components/Navbar/hamburger/burgermenu'

function App() {
  return (
    <div id="App">
    {/* <Container fluid className="mid-background" id="App"> */}
    {/* <Menu className="hide_for_desktop" pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
    <NavBar/>
      <div className="mainbody">
    {/* <NavBar/> */}
    <div>
      <br/>
    <Router>
      <Switch>
      <Route path="/" component={homePage}/>  
        {/* <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>  */}
      </Switch>
    </Router>
    
    </div>
    </div>
    {/* </Container> */}
    </div>
  );
}

export default App;
