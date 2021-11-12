import './SiteNav.css'
import { Link } from "react-router-dom";

const SiteNav = () => {
    return(
        <>
            <p>I discovered my bliss when I got my first Windows XP in middle school. The rest is history. Learn more about my magic below: </p>
            <ul>
                <li>Leave a note</li>
                <li>Contact me</li>
            </ul>
            <ul>
            <Link to="/about">my bio</Link>
            <Link to="/generative-fun">click me</Link>
            
            </ul>
        </>
    )

}

export default SiteNav;