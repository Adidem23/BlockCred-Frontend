import '../CSS/MainPageWeb.css';
import Verify from '../Images/Verify.png'
import Generate from '../Images/Generate.png'
import { ConnectWallet } from "@thirdweb-dev/react";
import Block from '../Images/Block.png'

const MainPageWeb = () => {
    return (
        <>
            <div className='MainPage'>

                <img src={Block} alt='No Image' />

                <div className='connectwallet'>

                    <ConnectWallet
                        theme="dark"
                        btnTitle="Connect Wallet"
                    />

                </div>

                <div className='innerDiv'>

                    <button style={{ width: '300px', height: "60px", alignItems: 'center', background: "white", textAlign: 'center', borderRadius: '100px', display: 'flex', flexDirection: 'row', border: '1px solid black', marginTop: '30px' }}>

                        <img src={Verify} alt='LoginImage' style={{ marginLeft: '30px' }} />

                        <h3 style={{ marginLeft: '20px' }}>Verify Certificates</h3>
                    </button>

                    <button style={{ width: '300px', height: "60px", alignItems: 'center', background: "white", textAlign: 'center', borderRadius: '100px', display: 'flex', flexDirection: 'row', border: '1px solid black', marginTop: '70px' }}>

                        <img src={Generate} alt='LoginImage' style={{ marginLeft: '30px' }} />

                        <h3 style={{ marginLeft: '20px' }}>Generate Certificates</h3>
                    </button>


                </div>


            </div>
        </>
    )
}

export default MainPageWeb