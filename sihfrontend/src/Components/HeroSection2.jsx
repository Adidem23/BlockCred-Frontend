import '../CSS/HeroSection2.css';
import Slide from 'react-reveal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';
import abi from '../abi/BlockCred.json';
import { useNavigate } from 'react-router-dom';

const HeroSection2 = () => {

    const [HoveredCards, setHoveredCards] = useState(false);
    const [HoveredHead, setHoveredHead] = useState(false);
    const [CheckAdminState, setCheckAdminState] = useState(false);
    const [CheckOrganizationState, setCheckOrganizationState] = useState(false);
    const [CheckUserState, setCheckUserState] = useState(false);

    const ModeofLight = useSelector(state => state.mode);
    const AccountConnected = useSelector(state => state.account);
    const Navigator = useNavigate();

    if (ModeofLight === "Dark") {
        const carddivs = document.querySelectorAll('.card');
        carddivs.forEach((card) => {
            card.style.backgroundColor = "Grey"
            card.style.color = "#F1EFEF"
        })
    }

    if (ModeofLight === "Light") {
        const carddivs = document.querySelectorAll('.card');
        carddivs.forEach((card) => {
            card.style.backgroundColor = "#F7B633"
            card.style.color = "black"

        })
    }

    const Providers = new ethers.providers.Web3Provider(window.ethereum);
    const Signers = Providers.getSigner();
    const ContractAddress = "0x15711b4CD7fc52c5b98905eAa1aADcd21a4A8d33";
    const contractABI = abi.abi;
    const ContractInstance = new ethers.Contract(ContractAddress, contractABI, Signers);

    const CheckSuperAdmin = async () => {
        const CheckSuperAdminornot = await ContractInstance.isSuperadmin(AccountConnected);
        if (CheckSuperAdminornot == true) {
            setCheckAdminState(true);
        } else {
            setCheckAdminState(false)
        }
    }
    CheckSuperAdmin();

    const CheckOrganization = async () => {
        const CheckOrgi = await ContractInstance.organizationExists(AccountConnected);
        if (CheckOrgi == true) {
            setCheckOrganizationState(true);
        } else {
            setCheckOrganizationState(false);
        }
    }
    CheckOrganization();


    const CheckUserConnected = async () => {
        const CheckUser = await ContractInstance.userExists(AccountConnected);
        if (CheckUser == true) {
            setCheckUserState(true);
        } else {
            setCheckUserState(false);
        }
    }
    CheckUserConnected();


    return (
        <>
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="header-ecosystem-content">

                            <h2 className="heading-style-h1">BlockCred : Online Certificate Generator </h2>


                            {!CheckAdminState && !CheckOrganizationState && !CheckUserState ? <><div style={{ marginTop: "50px", display: "flex", flexDirection: "row", width: "fit-content", marginLeft: "auto", marginRight: "auto" }}  >

                                <Slide left when={HoveredCards} >
                                    <div className="card" id='card1' onMouseEnter={() => { setHoveredCards(true) }} >
                                        <div className="icon">📃</div>
                                        <div className="title">Welcome To our Website</div>
                                        <p className="description">The login functionality is a critical component of any digital platform or application, providing secure access to authorized users.</p>
                                    </div>
                                </Slide>
                            </div></> : CheckAdminState ? <><div style={{ marginTop: "50px", display: "flex", flexDirection: "row", width: "fit-content", marginLeft: "auto", marginRight: "auto" }}  >

                                <Slide left when={HoveredCards} >
                                    <div className="card" id='card1' onMouseEnter={() => { setHoveredCards(true) }} onClick={(e) => { e.preventDefault(); Navigator("/addorgi") }} >
                                        <div className="icon">🏫</div>
                                        <div className="title">Add OrganizationS</div>
                                        <p className="description">The login functionality is a critical component of any digital platform or application, providing secure access to authorized users.</p>
                                    </div>
                                </Slide>
                            </div></> : CheckOrganizationState ? <><div style={{ marginTop: "50px", display: "flex", flexDirection: "row", width: "fit-content", marginLeft: "auto", marginRight: "auto" }}  >

                                <Slide left when={HoveredCards} >
                                    <div className="card" id='card1' onMouseEnter={() => { setHoveredCards(true) }} onClick={(e)=>{e.preventDefault(); Navigator("/checkreq")}}>
                                        <div className="icon">⚡🐳</div>
                                        <div className="title">Check Requests</div>
                                        <p className="description">The login functionality is a critical component of any digital platform or application, providing secure access to authorized users.</p>
                                    </div>
                                </Slide>

                                <Slide right when={HoveredHead}>
                                    <div className="card" id='card2' style={{ marginLeft: "80px" }} onMouseEnter={() => { setHoveredHead(true) }} onClick={(e) => { e.preventDefault(); Navigator("/adduser") }}>
                                        <div className="icon">👥</div>
                                        <div className="title">Add Users</div>
                                        <p className="description">This feature is a valuable functionality within a certificate management or verification system.</p>
                                    </div>
                                </Slide>
                            </div></> : CheckUserState && <>
                                <div style={{ marginTop: "50px", display: "flex", flexDirection: "row", width: "fit-content", marginLeft: "auto", marginRight: "auto" }}  >

                                    <Slide left when={HoveredCards} >
                                        <div className="card" id='card1' onMouseEnter={() => { setHoveredCards(true) }} >
                                            <div className="icon">😶‍🌫️</div>
                                            <div className="title">All Certificates</div>
                                            <p className="description">The login functionality is a critical component of any digital platform or application, providing secure access to authorized users.</p>
                                        </div>
                                    </Slide>

                                    <Slide right when={HoveredHead}>
                                        <div className="card" id='card2' style={{ marginLeft: "80px" }} onMouseEnter={() => { setHoveredHead(true) }} onClick={(e) => { e.preventDefault(); Navigator("/request") }}>
                                            <div className="icon">🥳</div>
                                            <div className="title">Request Certificates</div>
                                            <p className="description">This feature is a valuable functionality within a certificate management or verification system.</p>
                                        </div>
                                    </Slide>

                                    <Slide top when={HoveredHead}>
                                        <div className="card" id='card2' style={{ marginLeft: "80px" }} onMouseEnter={() => { setHoveredHead(true) }} onClick={(e) => { e.preventDefault(); Navigator("/reqstats") }}>
                                            <div className="icon">🫣</div>
                                            <div className="title">Requested Status</div>
                                            <p className="description">This feature is a valuable functionality within a certificate management or verification system.</p>
                                        </div>
                                    </Slide>
                                </div>
                            </>}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HeroSection2