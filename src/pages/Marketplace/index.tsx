import React, { useState } from 'react';

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
import Modal from 'components/UI/Modal';
import Search from 'components/UI/Search';
import Button from 'components/UI/Button';
import Header from 'components/UI/Header';
import Separator from 'components/UI/Separator';

import Inventory from 'components/Inventory';

import PlusSVG from 'assets/icons/plus.svg';

import { 
    useInventory 
} from 'hooks/useInventory';

import { 
    useItem 
} from 'hooks/useItem';

import { 
    useNuiEvent 
} from 'hooks/useNuiEvent';

import {
    fetchNui 
} from 'utils/fetchNui';

import { 
    formatter 
} from 'utils/formatter';

import { 
    ItemProps
} from 'types/Item';

const Marketplace: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);
    const [item, setItem] = useState<ItemProps>({} as ItemProps);
    const [inventory, setInventory] = useState<ItemProps[]>([]);
    const [marketplace, setMarketplace] = useState<ItemProps[]>([]);

    const { visible: inventoryVisible, setVisible: setInventoryVisible } = useInventory();
    const { setVisible: setItemVisible } = useItem();

    const handleFilter = (value: string) => value !== filter ? setFilter(value) : setFilter('');

    const handleInventory = (value: boolean) => {
        setInventoryVisible(value);
        setItemVisible(value && false);

        fetchNui<ItemProps[]>('getInventory').then(value => {
            setInventory(value)
        });
    };

    const purchaseItem = (value: ItemProps): void => {
        setModal(!modal);

        fetchNui<ItemProps>('purchaseItem', value);
    };

    useNuiEvent<ItemProps[]>('getInventory', setInventory);
    useNuiEvent<ItemProps[]>('getMarketplace', setMarketplace);

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
                                <Nav onClick={() => handleFilter('Weapon')}>
                                    <Text type='navigator'>Weapons</Text>
                                </Nav>

                                <Nav onClick={() => handleFilter('Ammo')}>
                                    <Text type='navigator'>Ammo</Text>
                                </Nav>

                                <Nav onClick={() => handleFilter('Other')}>
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
                                    text='Buy'

                                    key={key}
                                    
                                    id={value.id}
                                    name={value.name} 
                                    type={value.type} 
                                    price={value.price}

                                    onClick={() => {setItem(value); setModal(!modal)}}
                                />
                            ))}
                        </Grid>
                    ) : (
                        <Text type='items'>No results found.</Text>
                    )}
                </Section>
            </Content>
                
            {inventoryVisible && 
                <Inventory 
                    data={inventory}
                />
            }

            {modal && 
                <Modal
                    title={'Buy ' + item.name}
                    subtitle={'You will buy this item for the value of: ' + formatter(item.price)}
                    handleAccept={() => purchaseItem(item)}
                    handleDecline={() => setModal(!modal)}
                />
            }
        </Container>
    )
}

export default Marketplace;