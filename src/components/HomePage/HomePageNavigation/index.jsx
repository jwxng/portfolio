import './HomePageNavigation.css'

import { Link } from "react-router-dom";

const HomePageNavigation = () => {

    return (
        <div className="home-page-navigation">
            <button>Experience</button>
            <button>Projects</button>
            <Link to='/about'><button>About Me</button></Link>
        </div>
    );
};

export default HomePageNavigation;