import React from 'react';
import heroOrnament from '../assets/images/heroOrnament.jpg';
import Header from '../components/Header.js/Header';
import Hero from '../components/Hero.js/Hero';
import OurLocation from '../components/OurLocation/OurLocation';
import OurServices from '../components/OurServices/OurServices';
const Home = () => {
    return (
        <div>
            <div style={{
                backgroundImage : `url(${heroOrnament})`,
                backgroundRepeat : "no-repeat",
                backgroundPosition : "center" ,
                backgroundSize : 'cover'
            }} className=''>
                <Header />
                <Hero />
                <OurLocation />
                <OurServices />
            </div>
        </div>
    );
};

export default Home;