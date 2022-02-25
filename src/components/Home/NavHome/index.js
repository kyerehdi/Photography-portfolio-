import react from 'react';
import { Link } from 'react-router-dom';
import './style.css';




function Navbar() {
    
    return (
        
        <div className="NavBar">
          
<ul className="list">

    <Link to="/business"><li className="elements">Portfolio</li></Link>

    <Link to="/casual"><li className="elements">Pricing</li></Link>
    <Link to="/ural"><li className="elements">About Me</li></Link>
      <Link to="/contact"><li className="elements">Contact Me</li></Link>

    



</ul>



        </div>

    )
}

export default Navbar;