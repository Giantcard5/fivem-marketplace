import React, { useState } from 'react';

import { 
    Container,
    Navigator,
    Section,
    Content,
    Header,
    Block,
    Grid
} from './styles';

import Nav from 'components/Nav';
import Text from 'components/Text';
import Item from 'components/Item';
import Search from 'components/Search';
import Separator from 'components/Separator';

import Selected from 'pages/Selected';

import { 
    TItem
} from 'types/Item';

import { 
    TInventory 
} from 'types/Inventory';

const Inventory: React.FC<TInventory> = (props) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [typeValue, setTypeValue] = useState<string>('');
    const [itemStatus, setItemStatus] = useState<boolean>(false);

    const [itemData, setItemData] = useState<TItem>();

    const handleTypeValue = (value: string) => {
        if (typeValue !== value) {
            setTypeValue(value);
        } else {
            setTypeValue('');
        };
    };

    return (
        <Container>
            <Content>
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
                        <Grid>
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
                                        if (itemStatus === true) {
                                            if (itemData?.id === value.id) {
                                                setItemStatus(false);
    
                                                setItemData({
                                                    id: value.id,
                                                    name: value.name,
                                                    type: value.type
                                                })
                                            } else {
                                                setItemData({
                                                    id: value.id,
                                                    name: value.name,
                                                    type: value.type
                                                })
                                            }
                                        } else {
                                            setItemStatus(true);

                                            setItemData({
                                                id: value.id,
                                                name: value.name,
                                                type: value.type
                                            })
                                        }
                                    }}
                                />
                            ))}
                        </Grid>
                    ) : (
                        <Text type='items'>No results found.</Text>
                    )}
                </Section>
            </Content>

            {itemStatus && itemData && <Selected
                id={itemData.id} 
                name={itemData.name} 
                type={itemData.type} 
            />}
        </Container>
    )
}

export default Inventory;