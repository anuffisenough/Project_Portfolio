import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import './index.scss';
import Logo from './Logo';
    
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['h', 'r', 'i', 's', 't', 'o', 'p', 'h', 'e', 'r']
    const jobArray = ['f', 'u', 'l', 'l', ' ', 's', 't', 'a', 'c', 'k', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']    
    
    useEffect(() => {
        let timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>W</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>l</span>
                <span className={`${letterClass} _14`}>l</span>
                <span> </span>
                <span className={`${letterClass} _15`}>h</span>
                <span className={`${letterClass} _16`}>e</span>
                <span className={`${letterClass} _17`}>l</span>
                <span className={`${letterClass} _18`}>l</span>
                <span className={`${letterClass} _19`}>o </span>
                <span> </span>
                <span className={`${letterClass} _20`}>t</span>
                <span className={`${letterClass} _21`}>h</span>
                <span className={`${letterClass} _22`}>e</span>
                <span className={`${letterClass} _23`}>r</span>
                <span className={`${letterClass} _24`}>e</span>
                <span className={`${letterClass} _25`}>!</span>
                <br />
                <span className={`${letterClass} _26`}>I</span>
                <span className={`${letterClass} _27`}>'</span>
                <span className={`${letterClass} _28`}>m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={29} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={30} />
                </h1>
                <h2>Full Stack Developer</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home