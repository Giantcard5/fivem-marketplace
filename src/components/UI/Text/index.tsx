import React from 'react';

import { 
    Container
} from './styles';

import { 
    TextProps 
} from 'types/Text';

const Text: React.FC<TextProps> = (props) => {
    return (
        <Container type={props.type}>
            {props.children}
        </Container>
    )
}

export default Text;