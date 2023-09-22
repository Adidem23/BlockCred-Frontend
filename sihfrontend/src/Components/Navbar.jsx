import "../CSS/Navbar.css"
import Logo from '../Images/BlockCred.jpg'
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {


    return (

        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span className="logo-text">BlockCred</span>

            </div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <ConnectWallet
                theme="dark"
                btnTitle="Connect Wallet"
            />
        </nav>
    );

};

export default Navbar;