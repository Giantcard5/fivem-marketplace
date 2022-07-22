import React from 'react';

import { 
    Container,
    Content,
    Text
} from './styles';

import { 
    TSearch
} from 'types/Search';

const Input: React.FC<TSearch> = ({...rest}) => {
    return (
        <Container>
            <Text>$</Text>
            <Content {...rest}/>
        </Container>
    )
}

export default Input;