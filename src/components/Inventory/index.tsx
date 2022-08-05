import React, { useState } from 'react';

import { 
    Container,
    Navigator,
    Section,
    Content,
    Block,
} from './styles';

import Nav from 'components/UI/Nav';
import Text from 'components/UI/Text';
import Grid from 'components/UI/Grid';
import Item from 'components/UI/Item';
import Search from 'components/UI/Search';
import Header from 'components/UI/Header';
import Separator from 'components/UI/Separator';

import Selected from 'components/Selected';

import { 
    useItem 
} from 'hooks/useItem';

import { 
    ItemProps
} from 'types/Item';

import { 
    InventoryProps 
} from 'types/Inventory';

const Inventory: React.FC<InventoryProps> = (props) => {
    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('');
    const [item, setItem] = useState<ItemProps>();

    const { visible: itemVisible, setVisible: setItemVisible } = useItem();

    const handleFilter = (value: string) => value !== filter ? setFilter(value) : setFilter('');

    return (
        <Container>
            <Content>
                <Header>
                    <Search
                        type='text' 
                        placeholder='Search by name' 
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }}
                        value={search}
                    />
                </Header>

                <Section>
                    <Navigator>
                        <Block>
                            <Nav onClick={() => {handleFilter('Weapon')}}>
                                <Text type='navigator'>Weapons</Text>
                            </Nav>

                            <Nav onClick={() => {handleFilter('Ammo')}}>
                                <Text type='navigator'>Ammo</Text>
                            </Nav>

                            <Nav onClick={() => {handleFilter('Other')}}>
                                <Text type='navigator'>Others</Text>
                            </Nav>
                        </Block>

                        <Separator/>
                    </Navigator>

                    {props.data ? (
                        <Grid>
                            {props.data.filter((value) => {
                                if (search === '') {
                                    if (filter === '') {
                                        return value;
                                    } else if (filter === value.type) {
                                        return value;
                                    };
                                } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                                    if (filter === '') {
                                        return value;
                                    } else if (filter === value.type) {
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
                                        if (itemVisible === true) {
                                            if (item?.id === value.id) {
                                                setItemVisible(false);
    
                                                setItem({
                                                    id: value.id,
                                                    name: value.name,
                                                    type: value.type
                                                })
                                            } else {
                                                setItem({
                                                    id: value.id,
                                                    name: value.name,
                                                    type: value.type
                                                })
                                            }
                                        } else {
                                            setItemVisible(true);

                                            setItem({
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

            {itemVisible && item && 
                <Selected
                    id={item.id} 
                    name={item.name} 
                    type={item.type} 
                />
            }
        </Container>
    )
}

export default Inventory;