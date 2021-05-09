import Jumbotron from 'react-bootstrap/Jumbotron'
import NavBar from "../Navbar/navbar"
import "./home.css"


function HomeCover (){
    return (
    <Jumbotron fluid className="homecover">
      <NavBar/>
      <div className="CoverText">
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
    </div>
</Jumbotron>
    )
}

export default HomeCover; 