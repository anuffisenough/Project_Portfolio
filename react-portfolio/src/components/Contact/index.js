import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        let timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_7ntmod6',
                'template_rdbqc1t',
                refForm.current,
                'W6ur7h2UgIfVNKijT',
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in programming opportunities or freelance work that utilize front-end, back-end, or full-stack development skills.
                    </p>
                    <p>
                        Please send me a message if I can help your company or project.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required>
                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className="info-map">
                    Christopher Uffman,
                    <br />
                    Denver, CO
                    <br />
                    <span>uffmanch@gmail.com</span>
                </div>
                <div className="map-wrap"> 
                    <MapContainer center={[39.73915, -104.9847]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[39.73915, -104.9847]}>
                            <Popup>I live in Capitol Hill!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;