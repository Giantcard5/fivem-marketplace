import React from 'react';

import { 
    Container 
} from './styles';

import { 
    HeaderProps 
} from 'types/Header';

const Header: React.FC<HeaderProps> = (props)=> {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Header;