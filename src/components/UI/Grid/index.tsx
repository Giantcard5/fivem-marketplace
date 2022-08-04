import React from 'react';

import { 
    Container 
} from './styles';

import { 
    ChildrenProps 
} from 'types/Children';

const Grid: React.FC<ChildrenProps> = (props)=> {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Grid;