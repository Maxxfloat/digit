import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {connect} from 'react-redux';

import ShowingState from '../Actions/ShowingState'

class SignUp extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            firstName : props.firstName,
            lastName : props.lastName,
            email : props.email,
            phoneNumber : props.phoneNumber,
            password : props.password,
            passwordConfirm : props.passwordConfirm
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.handleFirstName(this.state.firstName);
        this.props.handleLastName(this.state.lastName);
        this.props.handleEmail(this.state.email);
        this.props.handlePhoneNumber(this.state.phoneNumber);
        this.props.handlePassword(this.state.password);
    }

    changeHandler = (event, inputElement) => {
        this.setState({[inputElement] : event.target.value})
    }

    render () {

        return (
            <section>
                <Container fluid className='my-5'>
                    <Row className='justify-content-center align-items-center text-center'>
                        <form onSubmit={(event) => this.submitHandler(event)} className='col-xl-3 col-lg-4 col-md-5 col-sm-7 col-10' >
                            <p style={{fontSize : '1.5rem'}}>مشخصات خودرا وارد کنید</p>
                            <input type='text' placeholder='نام' className='form-control my-2' name='firstName' value={this.state.firstName} onChange={event => this.changeHandler(event , event.target.name)} />
                            <input type='text' placeholder='نام خانوادگی' className='form-control my-2' name='lastName' value={this.state.lastName} onChange={event => this.changeHandler(event , event.target.name)} />
                            <input type='email' placeholder='ایمیل' className='form-control my-2' name='email' value={this.state.email} onChange={event => this.changeHandler(event , event.target.name)} />
                            <input type='tel' placeholder='شماره همراه' className='form-control my-2' name='phoneNumber' value={this.state.phoneNumber} onChange={event => this.changeHandler(event , event.target.name)} />
                            <div className='mt-2 text-right'>
                                <input type='password' placeholder='رمز عبور' className='form-control' name='password' value={this.state.password} onChange={event => this.changeHandler(event , event.target.name)} />
                                <small>رمز عبور حداقل ۸ کاراکتر شامل حروف و عدد باشد</small>
                            </div>
                            <input type='password' placeholder='تکرار رمز عبور' className='form-control my-2' name='passwordConfig' value={this.state.passwordConfirm} onChange={event => this.changeHandler(event , event.target.name)} />
                            <button type='submit' className='btn btn-primary col' >ثبت نام</button>
                        </form>
                    </Row>
                </Container>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        firstName : state.firstName ,
        lastName : state.lastName,
        email : state.email,
        phoneNumber : state.phoneNumber,
        password : state.password,
        passwordConfirm : state.passwordConfirm
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        handleFirstName : (firstName) => Dispatch({type : 'FIRSTNAME_INPUT', payload : firstName}),
        handleLastName : (lastName) => Dispatch({type : 'LASTNAME_INPUT', payload : lastName}),
        handleEmail: (email) => Dispatch({type : 'EMAIL_INPUT', payload : email}),
        handlePhoneNumber : (phoneNumber) => Dispatch({type : 'PHONE_NUMBER_INPUT', payload : phoneNumber}),
        handlePassword : (password) => Dispatch({type : 'PASSWORD_INPUT', payload : password}),
        ShowingState : () => Dispatch(ShowingState)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
