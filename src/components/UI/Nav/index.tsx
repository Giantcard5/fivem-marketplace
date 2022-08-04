import React from 'react';

import { 
    Container
} from './styles';

import { 
    NavProps
} from 'types/Nav';

import { 
    ChildrenProps 
} from 'types/Children';

const Nav: React.FC<NavProps & ChildrenProps> = (props) => {
    return (
        <Container onClick={props.onClick}>
            {props.children}
        </Container>
    )
}

export default Nav;