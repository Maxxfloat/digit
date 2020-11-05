import store from '../CreateStore'

const ShowingState = () => {
    return {
        type : 'SHOWING_STATE',
        payload : console.log(store.getState())
    }
}

export default ShowingState;