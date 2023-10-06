import '../CSS/HeroSection2.css';
import Slide from 'react-reveal';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const HeroSection2 = () => {

    const [HoveredCards, setHoveredCards] = useState(false);
    const [HoveredHead, setHoveredHead] = useState(false);

    const ModeofLight=useSelector(state=>state);

    if(ModeofLight==="Dark"){
      const carddivs=document.querySelectorAll('.card');
      carddivs.forEach((card)=>{
        card.style.backgroundColor="Grey"
        card.style.color="#F1EFEF"
      })
    }

    if (ModeofLight==="Light") {
        const carddivs=document.querySelectorAll('.card');
        carddivs.forEach((card)=>{
          card.style.backgroundColor="#F7B633"
        card.style.color="black"

        })
    }

    return (
        <>
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="header-ecosystem-content">

                            <h2 className="heading-style-h1">BlockCred : Online Certificate Generator </h2>


                            <div style={{ marginTop: "50px", display: "flex", flexDirection: "row", width: "fit-content", marginLeft: "auto", marginRight: "auto" }}  >

                                <Slide left when={HoveredCards} >
                                    <div className="card" id='card1' onMouseEnter={() => { setHoveredCards(true) }} >
                                        <div className="icon">📃</div>
                                        <div className="title">All Certificates</div>
                                        <p className="description">The login functionality is a critical component of any digital platform or application, providing secure access to authorized users.</p>
                                    </div>
                                </Slide>

                                <Slide right when={HoveredHead}>
                                    <div className="card"  id='card2' style={{ marginLeft: "80px" }} onMouseEnter={()=>{setHoveredHead(true)}}>
                                    <div className="icon">😈</div>
                                        <div className="title">Request Certificate</div>
                                        <p className="description">This feature is a valuable functionality within a certificate management or verification system.</p>
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