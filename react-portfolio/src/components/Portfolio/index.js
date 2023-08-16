import './index.scss';
import React from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    return (
        <>
        <div className="container portfolio-page">
        <h1 className="page-title">
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                        idx={15}
                    />
                </h1>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Portfolio;

