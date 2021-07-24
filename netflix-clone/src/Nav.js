import React, {useEffect, useState} from 'react'
import "./Nav.css"
function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 75) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='mainNavigation'>
            <img
            className="nav_logo"
            src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
            alt="Netflix Logo"
            />
            <ul class="mainNavigation">
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
            </ul>
            </div>
            <img 
            className="nav_avatar"
            src="https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fangry-chicken-netflix-user-icon-5927959975f50.jpeg"
            alt="Netflix Avatar"/>
        </div>
    )
}

export default Nav
