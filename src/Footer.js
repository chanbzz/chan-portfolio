import React, { useState, useEffect } from 'react';
import './Footer.css';


const Footer = () => {
    let [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date(), 1000))

        return function cleanup() {
            clearInterval(timer)
        }

    });

    return(
        <>
            <div className='footer-container'>
                <ul id='footer-list'>
                    <li className="footer-list"> Buy me coffee</li>
                    <li className="footer-list"> Enjoy my programming playlist</li>
                    <li className="footer-list">Tone.js rules</li>
                    <li id='time'> It's {date.toLocaleTimeString()}</li>
                </ul>
            </div>
        </>
    )
}

export default Footer;