import React from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input';
import axios from 'axios';

class Auth extends React.Component {
    state = {
        signupForm : {
            firstName : {
                elementType: 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'نام',
                    className : 'form-control'
                },
                value : '',
                validation : {
                    required: true
                },
                valid : false
            },
            lastName : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'نام خانوادگی',
                    className : 'form-control'
                },
                value : '',
                validation : {
                    required: true
                },
                valid : false
            },
            email : {
                elementType : 'input',
                elementConfig : {
                    type : 'email',
                    placeholder : 'ایمیل',
                    className : 'form-control'
                },
                value : '',
                validation : {
                    required: true
                },
                valid : false
            },
            phoneNumber : {
                elementType : 'input',
                elementConfig : {
                    type : 'tel',
                    placeholder : 'تلفن همراه',
                    pattern : '[0]{1}[9]{1}[0-9]{9}',
                    className : 'form-control'
                },
                value : '',
                validation : {
                    required: true
                },
                valid : false
            },
            password : {
                elementType : 'input',
                elementConfig : {
                    type : 'password',
                    placeholder : 'رمز عبور',
                    minLength : 8,
                    className : 'form-control'
                },
                value : '',
                validation : {
                    required: true
                },
                valid : false
            },
            passwordConfig : {
                elementType : 'input',
                elementConfig : {
                    type : 'password',
                    placeholder : 'رمز عبور',
                    minLength : 8,
                    className : 'form-control'
                },
                value : '',
                validation : {
                    required: true
                },
                valid : false
            },
        }
    };


    inputChangedHandler = (event , inputIdentifier) => {
        const updatedSignupForm = {
            ...this.state.signupForm
        };
        const updatedFormElements = {
            ...updatedSignupForm[inputIdentifier]
        };
        updatedFormElements.value = event.target.value;
        updatedFormElements.valid = this.checkValidity(updatedFormElements.value, updatedFormElements.validation)
        updatedSignupForm[inputIdentifier] = updatedFormElements;
        this.setState({signupForm : updatedSignupForm});
    }
    
    submitHandler = (event) => {
        const ax = axios.create({
            timeout: 30000,
            headers: {
              'content-type': 'application/x-www-form-urlencoded'
            }
          });
        event.preventDefault();
        ax.post('http://localhost:3000',JSON.stringify(this.state.signupForm))
    }

    render () {

        const formElementArray = [];

        for (let key in this.state.signupForm) {
            formElementArray.push({
                id : key,
                config : this.state.signupForm[key]
            })
        }
        let form =  formElementArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event , formElement.id)}
                    />
                ))

        return (
            // <Route path='/auth'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <form onSubmit={this.submitHandler} className='col-6'>
                        {form}
                        <button type='submit'></button>
                    </form>
                </div>
            </div>
            // </Route>
        )
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(null,mapDispatchToProps)(Auth);