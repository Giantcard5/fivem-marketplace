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
    TButton 
} from 'types/Button';

import { 
    formatter 
} from 'utils/formatter';

const Item: React.FC<TItem & TButton> = (props) => {
    return (
        <Container key={props.id}>
            <Image>
                {props.price &&  <Text type='price'>{formatter(props.price)}</Text>}
            </Image>

            <Block>
                <Text type='item'>{props.name}</Text>
            </Block>

            <Button onClick={props.onClick}>
                <Text type='button'>{props.text}</Text>
            </Button>
        </Container>
    )
}

export default Item;