import "../CSS/Navbar.css"
import Logo from '../Images/BlockCred.jpg'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useState } from "react";


const Navbar = () => {

    const Dispatch = useDispatch(state => state.mode);
    const dispatchAccount = useDispatch(state => state.account);

    const ModeofLight = useSelector(state => state.mode);
    const AccountConnected = useSelector(state => state.account);

    const [ClickedForAccount, setClickedForAccount] = useState(false);

    const { ethereum } = window;

    ethereum.on('accountsChanged', async () => {
        setClickedForAccount(false)
    })

    if (ModeofLight === "Dark") {
        document.body.style.backgroundColor = "#393646";

        const spanelem = document.querySelectorAll('span');
        spanelem.forEach((spanelem) => {
            spanelem.style.color = "#F1EFEF"
        })

        const lielemes = document.querySelectorAll("a");
        lielemes.forEach((lielem) => {
            lielem.style.color = "#F1EFEF";
        })

        const h2elem = document.querySelectorAll('h2');
        h2elem.forEach((lielem) => {
            lielem.style.color = "#F1EFEF";
        })

    }

    if (ModeofLight === "Light") {
        document.body.style.backgroundColor = "white";


        const spanelem = document.querySelectorAll('span');
        spanelem.forEach((spanelem) => {
            spanelem.style.color = "black"
        })


        const lielemes = document.querySelectorAll("a");
        lielemes.forEach((lielem) => {
            lielem.style.color = "black";
        });

        const h2elem = document.querySelectorAll('h2');
        h2elem.forEach((lielem) => {
            lielem.style.color = "black";
        })

    }

    return (

        <nav className="navbar">

            <div className="logo">

                <img src={Logo} alt="Logo" />
                <span className="logo-text" id="l">BlockCred</span>


            </div>

            <ul className="nav-links">
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Help</a></li>
                {!ClickedForAccount && <li><a href="#">Hello!! Stranger</a></li>}
                {ClickedForAccount && <><li ><a href="#"><Jazzicon diameter={20} seed={jsNumberForAddress(`${AccountConnected}`)} /></a></li>
                    <li><a href="#" style={{ color: "black" }}>{AccountConnected}</a></li></>}
            </ul>



            <label htmlFor="theme" className="theme">
                <span className="theme__toggle-wrap">
                    <input id="theme" className="theme__toggle" type="checkbox" name="theme" onChange={e => {
                        if (ModeofLight === "Light") {
                            Dispatch({ type: "Dark" })
                        } else {
                            Dispatch({ type: 'Light' })
                        }
                    }} />
                    <span className="theme__fill"></span>
                    <span className="theme__icon">
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                    </span>
                </span>
            </label>

            <div className="voltage-button" onClick={(e) => { e.preventDefault(); setClickedForAccount(true) }}>

                <button id="guppy" onClick={e => { dispatchAccount({ type: "Connect" }) }}>{ClickedForAccount ? <p>Connected!!</p> : <p>Connect</p>}</button>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 234.6 61.3" preserveAspectRatio="none">

                    <filter id="glow">
                        <feGaussianBlur className="blur" result="coloredBlur" stdDeviation="2"></feGaussianBlur>
                        <feTurbulence type="fractalNoise" baseFrequency="0.075" numOctaves="0.3" result="turbulence"></feTurbulence>
                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="G" result="displace"></feDisplacementMap>
                        <feMerge>
                            <feMergeNode in="coloredBlur"></feMergeNode>
                            <feMergeNode in="coloredBlur"></feMergeNode>
                            <feMergeNode in="coloredBlur"></feMergeNode>
                            <feMergeNode in="displace"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <path className="voltage line-1" d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z" fill="transparent" stroke="#fff"></path>
                    <path className="voltage line-2" d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z" fill="transparent" stroke="#fff"></path>
                </svg>
                <div className="dots">
                    <div className="dot dot-1"></div>
                    <div className="dot dot-2"></div>
                    <div className="dot dot-3"></div>
                    <div className="dot dot-4"></div>
                    <div className="dot dot-5"></div>
                </div>
            </div>



        </nav>
    );

};

export default Navbar;