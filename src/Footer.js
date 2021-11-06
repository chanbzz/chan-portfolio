import React, { useState, useEffect } from 'react';
import './Footer';


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
                    <li> Buy me coffee</li>
                    <li> Enjoy my programming playlist</li>
                    <li id='time'> It's {date.toLocaleTimeString()}</li>
                </ul>
            </div>
        </>
    )
}

export default Footer;