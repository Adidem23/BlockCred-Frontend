const { ethereum } = window;

let account = await ethereum.request({
    method: "eth_requestAccounts",
});

ethereum.on('accountsChanged', async (accountnew) => {
    alert("Account Changed  , click connect again!!");
    account = accountnew;
})


const AccountReducer = (state = "", action) => {

    switch (action.type) {
        case 'Connect':
            state = account[0];
            console.log("Connected Account is :" + state);
            return state;

        default: return state;
    }


}

export default AccountReducer;