import React from 'react';

import { 
    Container,
    Button,
    Image
} from './styles';

import Text from 'components/Text';

const Item: React.FC = () => {
    return (
        <Container>
            <Image>
                <Text type='price'>$1.000.000</Text>
            </Image>

            <Text type='item'>Assault Rifle</Text>
            
            <Button>
                <Text type='button'>Buy</Text>
            </Button>
        </Container>
    )
}

export default Item;