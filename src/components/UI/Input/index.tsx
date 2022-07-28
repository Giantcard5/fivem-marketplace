import React from 'react';

import { 
    Container,
    Content,
    Text
} from './styles';

import { 
    SearchProps
} from 'types/Search';

const Input: React.FC<SearchProps> = ({...rest}) => {
    return (
        <Container>
            <Text>$</Text>
            <Content {...rest}/>
        </Container>
    )
}

export default Input;