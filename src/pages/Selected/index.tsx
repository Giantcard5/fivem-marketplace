import React, { useState } from 'react';

import { 
    Container,
    Button,
    Image,
    Block
} from './styles';

import Text from 'components/Text';
import Input from 'components/Input';

import { 
    TItem 
} from 'types/Item';

import { 
    fetchNui 
} from 'utils/fetchNui';

const Selected: React.FC<TItem> = (props) => {
    const [itemPrice, setItemPrice] = useState<number>(0);

    const preventMinus = (event: any) => {
        if (event.code === 'Minus') {
            event.preventDefault();
        };
    };
    
    const handleItemValue = (value: TItem) => {
        if (value.price !== 0) {
            fetchNui<TItem>('handleInventoryValue', value);
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