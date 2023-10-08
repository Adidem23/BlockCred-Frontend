import { ethers } from "ethers";
import abi from '../abi/BlockCred.json';
import '../CSS/Request.css';
import { useSelector } from "react-redux";
import { useState } from "react";



const RequestedStats = () => {
    const Providers = new ethers.providers.Web3Provider(window.ethereum);
    const Signers = Providers.getSigner();
    const ContractAddress = "0x15711b4CD7fc52c5b98905eAa1aADcd21a4A8d33";
    const contractABI = abi.abi;
    const ContractInstance = new ethers.Contract(ContractAddress, contractABI, Signers);
    const AccountConnected = useSelector(state => state.account);
    const [RequestStatus, setRequestStatus] = useState("");


    const getRequestStats = async () => {
        const RequestStats = await ContractInstance.getRequestStatus("0x2f9a620CA1811EF90200789e7511d88D224053dD", AccountConnected);
        setRequestStatus(RequestStats)
    }

    getRequestStats();

    return (
        <>
            <div className="bg">
                <h2 style={{ display: 'block', margin: 'auto', width: 'fit-content', color: "#fff" }}>All Requests Status </h2>

                <div style={{ display: 'block', margin: 'auto', width: 'fit-content' }}>

                    <div className="cookie-cardop1">
                        <span className="titleop1">🏫</span>
                        <p className="descriptionop1">
                            <span>Name of Oragnization :0x2f9a620CA1811EF90200789e7511d88D224053dD</span>
                            <br />
                            <span style={{color:"green"}}>Accepted</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestedStats