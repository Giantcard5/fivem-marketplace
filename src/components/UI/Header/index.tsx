import React from 'react';

import { 
    Container 
} from './styles';

import { 
    ChildrenProps 
} from 'types/Children';

const Header: React.FC<ChildrenProps> = (props)=> {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Header;