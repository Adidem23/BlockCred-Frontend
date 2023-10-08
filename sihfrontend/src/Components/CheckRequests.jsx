import abi from '../abi/BlockCred.json';
import { useState } from 'react';
import '../CSS/Request.css';
import { useSelector } from "react-redux";
import { ethers } from 'ethers';

const CheckRequests = () => {

    const [AllRequests, setAllRequests] = useState([]);
    const AccountConnected = useSelector(state => state.account);
    const [Accepted, setAccepted] = useState(false);
    const [Rejected, setRejected] = useState(false);

    const Providers = new ethers.providers.Web3Provider(window.ethereum);
    const Signers = Providers.getSigner();
    const ContractAddress = "0x15711b4CD7fc52c5b98905eAa1aADcd21a4A8d33";
    const contractABI = abi.abi;
    const ContractInstance = new ethers.Contract(ContractAddress, contractABI, Signers);

    const getAllrequests = async () => {
        const allrequest = await ContractInstance.getRequests(AccountConnected);
        setAllRequests(allrequest);
    }
    getAllrequests();

    const GenerateCertificate = async (Account) => {

    }

    return (
        <>

            <div className='bg'>
                <h2 style={{ display: 'block', margin: 'auto', width: 'fit-content', color: "#fff" }}>All Requests</h2>

                {AllRequests.map((val) => {
                    return (<> <div style={{ display: 'block', margin: 'auto', width: 'fit-content' }} >

                        <div className="cookie-cardop1">

                            <p className="descriptionop1">
                                <span>Requested From User:{val}</span>
                                <br />
                            </p>
                            <div className="actionsop1">
                                <button className="acceptop1" onClick={async (e) => {
                                    e.preventDefault();
                                    const AcceptRequest = await ContractInstance.acceptRequest(AccountConnected, val);
                                    console.log(AcceptRequest);
                                    setAccepted(true);
                                }}>
                                    Accept
                                </button>
                                <button className="acceptop1" onClick={async (e) => {
                                    const AcceptRequest = await ContractInstance.rejectRequest(AccountConnected, val);
                                    console.log(AcceptRequest);
                                    setRejected(true);
                                }}>
                                    Reject
                                </button>
                            </div>
                        </div>
                    </div>
                    </>)
                })}

                {Accepted && <><div style={{ display: 'block', margin: 'auto', width: 'fit-content'}}>

                </div></>}

            </div>
        </>
    )
}

export default CheckRequests