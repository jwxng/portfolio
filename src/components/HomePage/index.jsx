import './HomePage.css'

import HomePageNavigation from './HomePageNavigation'

const HomePage = () => {

    return (
        <div className="home-page">
            <p className="name-text">
                Hi, I'm Jason Wang. Let's Chat!
            </p>
            <HomePageNavigation />
        </div>
    );
};

export default HomePage;