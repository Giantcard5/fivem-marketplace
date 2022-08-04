import React, { memo } from 'react';

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

const Item: React.FC<ItemProps> = (props) => {
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

export default memo(Item);