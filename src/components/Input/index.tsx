import React from 'react';

import { 
    Container,
    Content
} from './styles';

import { 
    TSearch
} from 'types/Search';

const Input: React.FC<TSearch> = ({...rest}) => {
    return (
        <Container>
            <Content {...rest}/>
        </Container>
    )
}

export default Input;