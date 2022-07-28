import React from 'react';

import { 
    Container,
    Image,
    Block
} from './styles';

import Text from 'components/UI/Text';
import Button from 'components/UI/Button';

import { 
    formatter 
} from 'utils/formatter';

import { 
    ItemProps 
} from 'types/Item';

import { 
    TButton 
} from 'types/Button';

const Item: React.FC<ItemProps & TButton> = (props) => {
    return (
        <Container key={props.id}>
            <Image>
                {props.price &&  <Text type='price'>{formatter(props.price)}</Text>}
            </Image>

            <Block>
                <Text type='item'>{props.name}</Text>
            </Block>

            <Button type='item' onClick={props.onClick}>
                <Text type='button'>{props.text}</Text>
            </Button>
        </Container>
    )
}

export default Item;