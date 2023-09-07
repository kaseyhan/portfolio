import { useEffect, useState } from "react";
import './navbar.scss';

export default function Navbar() {
    const [navSize, setNavSize] = useState("10rem");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavSize("15px") : setNavSize("60px");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return(
        <header>
            <nav id="navbar" style={{ height: navSize }}>
                <div id="navbarItem">
                    <a class="navButton" href="#about">about</a>
                </div>
                <div id="navbarItem"> 
                    <a class="navButton" href="#experience">experience</a>
                </div>
                <div id="navbarItem">
                    <a class="navButton" href="#projects">projects</a>
                </div>
                <div id="navbarItem"> 
                    <a class="navButton" href="#skills">skills</a>
                </div>
                <div id="navbarItem"> 
                    <a class="navButton" href="#contact">contact</a>
                </div>
            </nav>
        </header>
    )
}