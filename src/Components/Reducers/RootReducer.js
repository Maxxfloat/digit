const initialState = {
    firstName : '' ,
    lastName : '',
    email : '',
    phoneNumber : '',
    password : ''
}

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('FIRSTNAME_INPUT') :
            state.firstName = action.payload;
            break;
        case ('LASTNAME_INPUT') :
            state.lastName = action.payload;
                break;
        case ('EMAIL_INPUT') :
            state.email = action.payload;
            break;
        case ('PHONE_NUMBER_INPUT') :
            state.phoneNumber = action.payload;
            break;
        case ('PASSWORD_INPUT') :
            state.password = action.payload;
            break;
        default : 
            console.log("RootReducer Doesnt Work");

    }
    console.log(state)
    return state
}

export default RootReducer;