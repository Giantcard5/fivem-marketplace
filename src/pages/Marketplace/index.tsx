import React, { useState, useContext, useCallback, useMemo, Context } from 'react';

import { 
    Container, 
    Navigator,
    Content,
    Section,
    Article,
    Block
} from './styles';

import Nav from 'components/UI/Nav';
import Text from 'components/UI/Text';
import Item from 'components/UI/Item';
import Grid from 'components/UI/Grid';
import Image from 'components/UI/Image';
import Search from 'components/UI/Search';
import Button from 'components/UI/Button';
import Header from 'components/UI/Header';
import Separator from 'components/UI/Separator';

import Inventory from 'components/Inventory';

import PlusSVG from 'assets/icons/plus.svg';

import { 
    InventoryContext 
} from 'providers/InventoryProvider';

import { 
    ItemContext 
} from 'providers/ItemProvider';

import {
    fetchNui 
} from 'utils/fetchNui';

import { 
    useNuiEvent 
} from 'hooks/useNuiEvent';

import { 
    ItemProps
} from 'types/Item';

import { 
    ProviderProps 
} from 'types/Provider';

const Marketplace: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('');
    const [inventory, setInventory] = useState<ItemProps[]>([]);
    const [marketplace, setMarketplace] = useState<ItemProps[]>([]);

    const { 
        visible: inventoryVisible, 
        setVisible: setInventoryVisible 
    } = useContext(InventoryContext as Context<ProviderProps>);

    const { 
        setVisible: setItemVisible 
    } = useContext(ItemContext as Context<ProviderProps>);

    const handleFilter = (value: string) => value !== filter ? setFilter(value) : setFilter('');

    const handleInventory = (value: boolean) => {
        setInventoryVisible(value);
        setItemVisible(value && false);

        fetchNui<ItemProps[]>('getInventory').then(value => {
            setInventory(value)
        });
    };

    const purchaseItem = (value: ItemProps): any => {
        fetchNui<ItemProps>('purchaseItem', value);
    };

    useNuiEvent<ItemProps[]>('getMarketplace', setMarketplace);

    console.log('Render Matketplace')

    return (
        <Container>
            <Content>
                <Header>
                    <Text type='subtitle'>Black</Text>
                    <Text type='title'>Market</Text>

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
                            <Article>
                                <Nav onClick={() => {handleFilter('Weapon')}}>
                                    <Text type='navigator'>Weapons</Text>
                                </Nav>

                                <Nav onClick={() => {handleFilter('Ammo')}}>
                                    <Text type='navigator'>Ammo</Text>
                                </Nav>

                                <Nav onClick={() => {handleFilter('Other')}}>
                                    <Text type='navigator'>Others</Text>
                                </Nav>
                            </Article>

                            <Button type='image' onClick={() => {handleInventory(!inventoryVisible)}}>
                                <Image type='plus' src={PlusSVG} alt='Search'/>
                            </Button>
                        </Block>

                        <Separator/>
                    </Navigator>

                    {marketplace ? (
                        <Grid>
                            {marketplace.filter((value) => {
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
                                    price={value.price}
                                    text='Buy'
                                    onClick={purchaseItem(value)}
                                />
                            ))}
                        </Grid>
                    ) : (
                        <Text type='items'>No results found.</Text>
                    )}
                </Section>
            </Content>
                
            {inventoryVisible && <Inventory data={inventory}/>}
        </Container>
    )
}

export default Marketplace;