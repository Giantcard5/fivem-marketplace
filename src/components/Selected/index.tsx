import React, { useState } from 'react';

import { 
    Container,
    Image,
    Block
} from './styles';

import Text from 'components/UI/Text';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';

import { 
    fetchNui 
} from 'utils/fetchNui';

import { 
    ItemProps 
} from 'types/Item';

const Selected: React.FC<ItemProps> = (props) => {
    const [itemPrice, setItemPrice] = useState<number>(0);

    const preventMinus = (event: any) => {
        if (event.code === 'Minus') {
            event.preventDefault();
        };
    };
    
    const handleItemValue = (value: ItemProps) => {
        if (value.price !== 0) {
            fetchNui<ItemProps>('handleInventoryValue', value);
        }
    };

    return (
        <Container>
            <Image>
                <Input
                    type='number'
                    placeholder='Choose a price . . .'
                    onKeyPress={preventMinus}
                    onChange={(event) => {
                        setItemPrice(parseInt(event.target.value))
                    }}
                />
            </Image>

            <Block>
                <Text type='item'>{props.name}</Text>
            </Block>

            <Button 
                type='item'
                onClick={() => {
                    handleItemValue({
                        id: props.id,
                        name: props.name,
                        price: itemPrice,
                        type: props.type
                    })
                }}
            >
                <Text type='button'>Announce</Text>
            </Button>
        </Container>
    )
}

export default Selected;