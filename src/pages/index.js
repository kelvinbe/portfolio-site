import React from 'react';
import Home from '../components/Home/Home'
import About from '../components/About me/About';
import Portfolio from '../components/Portfolio/Portfolio';

function Pages(props) {
    return (
        <div>
            <Home />
            <About />
            <Portfolio />
        </div>
    );
}

export default Pages;