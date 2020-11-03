const initialState = {
    counter : 0
}

const RootReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter : state.counter
        }
    }
    return state
}

export default RootReducer;