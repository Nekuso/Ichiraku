import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Popular from '../../components/Popular';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';

const Homepage = () => {

    return (
        <>
            <Hero/>
            <About/>
            <Popular/>
            <Feature/>
            <Footer/>
        </>
    );
}

export default Homepage;
