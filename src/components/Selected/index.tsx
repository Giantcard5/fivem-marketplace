import React, { useState, useContext, Context } from 'react';

import { 
    Container,
    Image,
    Block
} from './styles';

import Text from 'components/UI/Text';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';

import { 
    ItemContext 
} from 'providers/ItemProvider';

import { 
    InventoryContext 
} from 'providers/InventoryProvider';

import { 
    fetchNui 
} from 'utils/fetchNui';

import { 
    ItemProps 
} from 'types/Item';

import { 
    ProviderProps 
} from 'types/Provider';

const Selected: React.FC<ItemProps> = (props) => {
    const [price, setPrice] = useState<number>();

    const { 
        setVisible: setItemVisible 
    } = useContext(ItemContext as Context<ProviderProps>);
    
    const { 
        setVisible: setInventoryVisible 
    } = useContext(InventoryContext as Context<ProviderProps>);

    const preventMinus = (event: any) => event.code === 'Minus' && event.preventDefault();
    
    const annouceItem = (value: ItemProps) => {
        setItemVisible(false);
        setInventoryVisible(false);

        if (value.price !== 0) {
            fetchNui<ItemProps>('annouceItem', value);
        };
    };

    return (
        <Container>
            <Image>
                <Input
                    type='number'
                    placeholder='Choose a price . . .'
                    onKeyPress={preventMinus}
                    onChange={(event) => {
                        setPrice(parseInt(event.target.value))
                    }}
                    value={price}
                />
            </Image>

            <Block>
                <Text type='item'>{props.name}</Text>
            </Block>

            <Button 
                type='item'
                onClick={() => {
                    annouceItem({
                        id: props.id,
                        name: props.name,
                        price: price,
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