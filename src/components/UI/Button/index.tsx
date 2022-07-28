import React from 'react';

import { 
    Container 
} from './styles';

import { 
    ButtonProps 
} from 'types/Button';

const Button: React.FC<ButtonProps> = (props)=> {
    return (
        <Container type={props.type} onClick={props.onClick}>
            {props.children}
        </Container>
    )
}

export default Button;