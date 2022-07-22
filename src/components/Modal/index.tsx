import React, { useState } from 'react';

import { 
    Container,
    Navigator,
    Section,
    Content,
    Header,
    Block
} from './styles';

import { 
    fetchNui 
} from 'utils/fetchNui';

import Nav from 'components/Nav';
import Text from 'components/Text';
import Item from 'components/Item';
import Search from 'components/Search';
import Separator from 'components/Separator';

import { 
    TItems,
    TItem
} from 'types/Item';

type TModal = {
    data: TItems;
}

const Modal: React.FC<TModal> = (props) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [typeValue, setTypeValue] = useState<string>('');

    const handleTypeValue = (value: string) => {
        if (typeValue !== value) {
            setTypeValue(value);
        } else {
            setTypeValue('');
        };
    };

    const handleItemValue = (value: TItem) => {
        if (value !== undefined) {
            fetchNui<TItem>('handleInventoryValue', value);
        }
    };

    // const [inventoryData, setInventoryData] = useState<TItems>();
    
    // useNuiEvent<TItems>('getInventoryData', setInventoryData);

    return (
        <Container>
            <Header>
                <Search
                    type='text' 
                    placeholder='Search by name' 
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                />
            </Header>

            <Section>
                <Navigator>
                    <Block>
                        <Nav onClick={() => {handleTypeValue('Weapon')}}>
                            <Text type='navigator'>Weapons</Text>
                        </Nav>

                        <Nav onClick={() => {handleTypeValue('Ammo')}}>
                            <Text type='navigator'>Ammo</Text>
                        </Nav>

                        <Nav onClick={() => {handleTypeValue('Other')}}>
                            <Text type='navigator'>Others</Text>
                        </Nav>
                    </Block>

                    <Separator/>
                </Navigator>

                {props.data ? (
                    <Content>
                        {props.data.filter((value) => {
                            if (searchValue === '') {
                                if (typeValue === '') {
                                    return value;
                                } else if (typeValue === value.type) {
                                    return value;
                                };
                            } else if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
                                if (typeValue === '') {
                                    return value;
                                } else if (typeValue === value.type) {
                                    return value;
                                };
                            };
        
                            return false;
                        }).map((value, key) => (
                            <Item 
                                key={key}
                                id={value.id}
                                name={value.name} 
                                type={value.type} 
                                text='Select'
                                onClick={() => {
                                    handleItemValue({ 
                                        id: value.id, 
                                        name: value.name, 
                                        type: value.type
                                    });
                                }}
                            />
                        ))}
                    </Content>
                ) : (
                    <Text type='items'>No results found.</Text>
                )}
            </Section>
        </Container>
    )
}

export default Modal;