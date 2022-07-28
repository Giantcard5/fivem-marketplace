import React from 'react';

import { 
    Container 
} from './styles';

import { 
    ImageProps 
} from 'types/Image';

const Image: React.FC<ImageProps> = (props)=> {
    return (
        <Container type={props.type} src={props.src} alt={props.alt}/>
    )
}

export default Image;