import '../CSS/HeroSection2.css';
import Slide from 'react-reveal';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const HeroSection2 = () => {

    const [HoveredCards, setHoveredCards] = useState(false);
    const [HoveredHead, setHoveredHead] = useState(false)

    return (
        <>
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="header-ecosystem-content">

                            <h2 className="heading-style-h1">BlockCred : Online Certificate Generator </h2>


                            <div style={{ marginTop: "50px", display: "flex", flexDirection: "row", width: "fit-content", marginLeft: "auto", marginRight: "auto" }}  >

                                <Slide left when={HoveredCards} >
                                    <div className="card" onMouseEnter={() => { setHoveredCards(true) }} >
                                        <div className="icon">😎</div>
                                        <div className="title">Login and Register</div>
                                        <p className="description">The login functionality is a critical component of any digital platform or application, providing secure access to authorized users.</p>
                                        <Link  to="/login" className="link">Visit</Link>
                                    </div>
                                </Slide>

                                <Slide right when={HoveredHead}>
                                    <div className="card" style={{ marginLeft: "80px" }} onMouseEnter={()=>{setHoveredHead(true)}}>
                                        <div className="icon">🫠</div>
                                        <div className="title">View All Certificates</div>
                                        <p className="description">This feature is a valuable functionality within a certificate management or verification system.</p>
                                        <Link to="/main" className="link">View</Link>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HeroSection2