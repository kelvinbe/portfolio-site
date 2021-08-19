import React from 'react';
import Home from '../components/Home/Home'
import About from '../components/About me/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';




function Pages(props) {
    return (
        <div>
            <Home />
            <About />
            <Portfolio />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
}

export default Pages;