import React from 'react';

import { 
    Container
} from './styles';

import { 
    NavProps
} from 'types/Nav';

const Nav: React.FC<NavProps> = (props) => {
    return (
        <Container onClick={props.onClick}>
            {props.children}
        </Container>
    )
}

export default Nav;