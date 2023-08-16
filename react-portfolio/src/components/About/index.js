import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faHtml5, faCss3, faJsSquare, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        let timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
        <div className="container about-page" >
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I am invigorated by finding new ways to solve problems and improve outcomes. This was true in my coaching career as well as my work in higher education admissions, and I look to continue that effort with new skills I am acquiring in the field of programming.
                </p>
                <p>My formal academic journey has provided me with deep insights into the unique considerations of adult learners, beginning with a Bachelor's degree in Psychology and culminating with a Master’s degree in Education, concentrating on Leadership in Adult and Organizational Learning. My graduate work focused on educational culture and hierarchy, which helped me to better understand my value within the organizational structures of higher education. Additionally, the leadership component has highlighted my strengths in the areas of connectedness, responsibility, and communication. Most recently, my completion of the Full Stack Web Development Certification through Southern Methodist University CAPE has equipped me with the understanding of front and back-end technologies and solutions, allowing for an even wider range of problem solving competencies.
                </p>
                <p>I look forward to the chance to immerse myself in a culture where common goals and philosophies are shared among individuals at all levels.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                </div>
                <div className='cubespinner'>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                </div>
                <div className='cubespinner'>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                </div>
                <div className='cubespinner'>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                </div>
                <div className='cubespinner'>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                </div>
                <div className='cubespinner'>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;