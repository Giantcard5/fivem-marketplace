import React, { useState, useEffect } from 'react';

import { 
    Container, 
    Navigator,
    Content,
    Section,
    Article,
    Button,
    Header,
    Image,
    Block,
    Grid
} from './styles';

import Nav from 'components/Nav';
import Text from 'components/Text';
import Item from 'components/Item';
import Modal from 'components/Modal';
import Search from 'components/Search';
import Separator from 'components/Separator';

import PlusSVG from 'assets/icons/plus.svg';

import {
    fetchNui 
} from 'utils/fetchNui';

import { 
    debugData 
} from 'utils/debugData';

import { 
    TItems,
    TItem
} from 'types/Item';

import { 
    useNuiEvent 
} from 'hooks/useNuiEvent';

debugData([
    {
        action: 'setVisible',
        data: true,
    }
]);

const Marketplace: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [filterValue, setFilterValue] = useState<string>('');
    const [modalValue, setModalValue] = useState(false);
    const [inventoryData, setInventoryData] = useState<TItems>([]);
    const [marketplaceData, setMarketplaceData] = useState<TItems>();

    const handleFilterValue = (value: string) => {
        if (filterValue !== value) {
            setFilterValue(value);
        } else {
            setFilterValue('');
        };
    };

    const handleModalValue = (value: boolean) => {
        setModalValue(value);

        fetchNui<TItems>('getInventoryData').then(value => {
            setInventoryData(value)
        });
    };

    useEffect(() => {
        const keyHandler = (event: KeyboardEvent) => {
            if (['Escape'].includes(event.code)) {
                setModalValue(false);
            };
        };

        window.addEventListener('keydown', keyHandler);

        return () => window.removeEventListener('keydown', keyHandler);
    }, [modalValue])

    const handleMarketplaceValue = (value: TItem) => {
        fetchNui<TItem>('handleMarketplaceValue', value);
    }

    useNuiEvent<TItems>('getMarketplaceData', setMarketplaceData);

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
                            setSearchValue(event.target.value);
                        }}
                    />
                </Header>

                <Section>
                    <Navigator>
                        <Block>
                            <Article>
                                <Nav onClick={() => {handleFilterValue('Weapon')}}>
                                    <Text type='navigator'>Weapons</Text>
                                </Nav>

                                <Nav onClick={() => {handleFilterValue('Ammo')}}>
                                    <Text type='navigator'>Ammo</Text>
                                </Nav>

                                <Nav onClick={() => {handleFilterValue('Other')}}>
                                    <Text type='navigator'>Others</Text>
                                </Nav>
                            </Article>

                            <Button onClick={() => {handleModalValue(!modalValue)}}>
                                <Image src={PlusSVG} alt='Search'/>
                            </Button>
                        </Block>

                        <Separator/>
                    </Navigator>

                    {marketplaceData ? (
                        <Grid>
                            {marketplaceData.filter((value) => {
                                if (searchValue === '') {
                                    if (filterValue === '') {
                                        return value;
                                    } else if (filterValue === value.type) {
                                        return value;
                                    };
                                } else if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
                                    if (filterValue === '') {
                                        return value;
                                    } else if (filterValue === value.type) {
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
                                    onClick={() => {
                                        handleMarketplaceValue(value)
                                    }}
                                />
                            ))}
                        </Grid>
                    ) : (
                        <Text type='items'>No results found.</Text>
                    )}
                </Section>
            </Content>
                
            {modalValue && <Modal data={inventoryData}/>}
        </Container>
    )
}

export default Marketplace;