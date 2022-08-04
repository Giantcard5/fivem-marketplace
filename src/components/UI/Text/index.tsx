import React from 'react';

import { 
    Container
} from './styles';

import { 
    TextProps 
} from 'types/Text';

import { 
    ChildrenProps 
} from 'types/Children';

const Text: React.FC<TextProps & ChildrenProps> = (props) => {
    return (
        <Container type={props.type}>
            {props.children}
        </Container>
    )
}

export default Text;