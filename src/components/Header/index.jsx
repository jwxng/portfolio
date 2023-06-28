import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <Link to='/'><button><h1>Jason Wang</h1></button></Link>
            <button>Experience</button>
            <button>Projects</button>
            <Link to='/about'><button>About Me</button></Link>
        </div>
    );
};

export default Header;