import React, { useState } from 'react';

import { 
    Container,
    Image,
    Block
} from './styles';

import Text from 'components/UI/Text';
import Input from 'components/UI/Input';
import Modal from 'components/UI/Modal';
import Button from 'components/UI/Button';

import { 
    useInventory 
} from 'hooks/useInventory';

import { 
    useItem 
} from 'hooks/useItem';

import { 
    fetchNui 
} from 'utils/fetchNui';

import { 
    formatter 
} from 'utils/formatter';

import { 
    ItemProps 
} from 'types/Item';

const Selected: React.FC<ItemProps> = (props) => {
    const [price, setPrice] = useState<number>();
    const [modal, setModal] = useState<boolean>(false);

    const { setVisible: setInventoryVisible } = useInventory();
    const { setVisible: setItemVisible } = useItem();

    const preventMinus = (event: any) => event.code === 'Minus' && event.preventDefault();
    
    const annouceItem = (value: ItemProps) => {
        setItemVisible(false);
        setInventoryVisible(false);
        
        setModal(false);

        fetchNui<ItemProps>('annouceItem', value);
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
                    value={price || ''}
                />
            </Image>

            <Block>
                <Text type='item'>{props.name}</Text>
            </Block>

            <Button 
                type='item'
                onClick={() => price && setModal(!modal)}
            >
                <Text type='button'>Announce</Text>
            </Button>
            
            {modal && 
                <Modal
                    title={'Announce ' + props.name}
                    subtitle={'This item will be advertised for the value of: ' + formatter(price)}
                    handleAccept={() => annouceItem(props)}
                    handleDecline={() => setModal(!modal)}
                />
            }
        </Container>
    )
}

export default Selected;