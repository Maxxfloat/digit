import React from 'react';

const paragraph = (props) => {
    let paragraphElement = null;

    switch (props.elementType) {
        case ('p') :
            paragraphElement = <p {...props.elementConfig}>{props.children}</p>
            break;
        default :
        paragraphElement = <p {...props.elementConfig}>{props.children}</p>
    }
    return (
        {paragraphElement}
    )
}

export default paragraph;