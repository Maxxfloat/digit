import React from 'react';

import Signup from './Signup'

export default class Registry extends React.Component {
    state = {
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber : '',
        password : ''
    }

    valueHandler = (attr , event) => {
        // for (let key in this.state) {
        //     if (attr === key)
        //     this.setState ({ attr : event })
        //     console.log(this.state.attr)
        // }
        console.log(attr,event)
    }

    render () {
        return (
            <>
                <Signup 
                    firstName = {this.valueHandler}
                    lastName = {this.state.lastName}
                    email = {this.state.email}
                />
            </>
        )
    }
}