import React from 'react';

import { 
    Container,
    Button,
    Image,
    Block
} from './styles';

import Text from 'components/Text';

import { 
    TItem 
} from 'types/Item';

import { 
    formatter 
} from 'utils/formatter';

const Item: React.FC<TItem> = (props) => {
    return (
        <Container>
            <Image>
                <Text type='price'>{formatter(props.price)}</Text>
            </Image>

            <Block>
                <Text type='item'>{props.name}</Text>
            </Block>

            <Button>
                <Text type='button'>Buy</Text>
            </Button>
        </Container>
    )
}

export default Item;