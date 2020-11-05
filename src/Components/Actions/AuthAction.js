import PostingSignupForm from '../axios/PostingSignupForm'

const AuthAction = async () => {
    const respond = await PostingSignupForm.post('/')
    return {
        type : 'DID_AUTH',
        payload : respond
    }
}

export default AuthAction;