import React from 'react';

import { 
    Container 
} from './styles';

import { 
    GridProps 
} from 'types/Grid';

const Grid: React.FC<GridProps> = (props)=> {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Grid;