import React from 'react';
import Contact from '../Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Banner from './Banner/Banner';
const Home = () => {
    

    return (
        <>
            <div className="container my-5" style={{ fontFamily: 'Raleway, sans-serif'}}>
                <Banner></Banner>
                <About></About>
            </div>
            <div className="container my-5" style={{ fontFamily: 'Raleway, sans-serif'}}>
                <Portfolio></Portfolio>
            </div>
            <div className="container my-5" id="contactme" style={{ fontFamily: 'Raleway, sans-serif'}}>
                <Contact></Contact>
            </div>
        </>
    );
};

export default Home;