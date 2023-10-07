const Modereducer = (state = "Light", action) => {

    switch (action.type) {
        case 'Dark': {
            state = "Dark"
            console.log("state is: " + state)
            return state
        }

        case 'Light': {
            state = "Light"
            console.log("state is: " + state)
            return state
        }

        default: return state
    }


}

export default Modereducer;