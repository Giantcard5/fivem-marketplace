import React from 'react';

import { 
    Container 
} from './styles';

import { 
    ButtonProps 
} from 'types/Button';

import { 
    ChildrenProps 
} from 'types/Children';

const Button: React.FC<ButtonProps & ChildrenProps> = (props)=> {
    return (
        <Container type={props.type} onClick={props.onClick}>
            {props.children}
        </Container>
    )
}

export default Button;