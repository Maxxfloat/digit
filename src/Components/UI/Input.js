import React from 'react'

const Input = (props) => {
    let inputElement = null ;

    switch (props.elementType) {
        case ( 'input' ) : 
            if (props.elementConfig.type === 'submit'){
                inputElement = <input {...props.elementConfig} value={props.value} onClick={event => event.preventDefault()} />;
                console.log(props.elementConfig.type)
            }else {
                inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />;
            };
            break;
        case ('textarea') : 
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />
    }

    return (
        <>
                <label>{props.label}</label>
                {inputElement}
        </>
    )
}

export default Input;