import { Polybase } from "@polybase/client"
import { useState } from "react";
import '../CSS/Request.css';
import { ethers } from "ethers";
import abi from '../abi/BlockCred.json';
import { useSelector } from "react-redux";



const Request = () => {

    const [AllOrgi, setAllOrgi] = useState([]);
    const AccountConnected = useSelector(state => state.account);


    const db = new Polybase({
        defaultNamespace: "pk/0x88f745e138e0a6a011a9ac5acecba9b815f65d1f861188022ddeae9498fed2b5d26f492c6d09ed1590b1006a88914066ca4c78006e163ef83072f04658a98539/BlockCRED@",
    });

    const collectionReference = db.collection("Organizations");
    const collectionReferenceofRequests = db.collection("Requests");
    console.log(collectionReferenceofRequests)


    async function getRecord() {
        const record = await collectionReference.get();
        setAllOrgi(record.data);
    }
    getRecord();

    return (
        <>

            <div className="bg">
                <h2 style={{ display: 'block', margin: 'auto', width: 'fit-content', color: "#fff" }}>All Organizations</h2>

                {AllOrgi.map((val) => {
                    return (<>

                        <div style={{ display: 'block', margin: 'auto', width: 'fit-content' }}>

                            <div className="cookie-cardop1">
                                <span className="titleop1">🏫</span>
                                <p className="descriptionop1">
                                    <span>Name of Oragnization :{val.data.Name}</span>
                                    <br />
                                </p>
                                <div className="actionsop1">
                                    <button className="acceptop1" onClick={async (e) => {
                                        e.preventDefault();
                                        const min = 1;
                                        const max = 100;
                                        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                                        const Providers = new ethers.providers.Web3Provider(window.ethereum);
                                        const Signers = Providers.getSigner();
                                        const ContractAddress = "0x15711b4CD7fc52c5b98905eAa1aADcd21a4A8d33";
                                        const contractABI = abi.abi;
                                        const ContractInstance = new ethers.Contract(ContractAddress, contractABI, Signers);
                                        try {
                                            const SentRequests = await ContractInstance.sendRequest(val.data.Address);
                                            const Polybasedata = await collectionReferenceofRequests.create([randomNum, AccountConnected, val.data.Address])
                                            console.log(Polybasedata);
                                            alert("Request Send Successfully!!");
                                        } catch (err) {
                                            alert(`${err.reason}`)
                                        }

                                    }}>
                                        Request
                                    </button>
                                </div>
                            </div>
                        </div></>)
                })}
            </div>
        </>
    )
}

export default Request