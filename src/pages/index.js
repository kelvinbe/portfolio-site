import React from 'react';
import Home from '../components/Home/Home'
import About from '../components/About me/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';


function Pages(props) {
    return (
        <div>
            <Home />
            <About />
            <Portfolio />
            <Blog />
        </div>
    );
}

export default Pages;