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
import Search from 'components/Search';
import Separator from 'components/Separator';

import Inventory from 'pages/Inventory';

import PlusSVG from 'assets/icons/plus.svg';

import {
    fetchNui 
} from 'utils/fetchNui';

import { 
    debugData 
} from 'utils/debugData';

import { 
    useNuiEvent 
} from 'hooks/useNuiEvent';

import { 
    TItems,
    TItem
} from 'types/Item';

debugData([
    {
        action: 'setVisible',
        data: true,
    },

]);

debugData<TItems>([
    {
        action: 'getMarketplaceData',
        data: [
            {
                "id": 1,
                "name": "Weapon",
                "type": "Weapon",
                "price": 100000
            },
            {
                "id": 2,
                "name": "Weapon",
                "type": "Weapon",
                "price": 100000
            },
            {
                "id": 3,
                "name": "Weapon",
                "type": "Weapon",
                "price": 200000
            },
            {
                "id": 4,
                "name": "Weapon",
                "type": "Weapon",
                "price": 200000
            },
            {
                "id": 5,
                "name": "Ammo",
                "type": "Ammo",
                "price": 100000
            },
            {
                "id": 6,
                "name": "Ammo",
                "type": "Ammo",
                "price": 100000
            },
            {
                "id": 7,
                "name": "Ammo",
                "type": "Ammo",
                "price": 200000
            },
            {
                "id": 8,
                "name": "Ammo",
                "type": "Ammo",
                "price": 200000
            },
            {
                "id": 9,
                "name": "Other",
                "type": "Other",
                "price": 100000
            },
            {
                "id": 10,
                "name": "Other",
                "type": "Other",
                "price": 100000
            },
            {
                "id": 11,
                "name": "Other",
                "type": "Other",
                "price": 200000
            },
            {
                "id": 12,
                "name": "Other",
                "type": "Other",
                "price": 200000
            }
        ]
    }
]);

const Marketplace: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [filterValue, setFilterValue] = useState<string>('');
    const [inventoryStatus, setInventoryStatus] = useState(false);
    const [inventoryData, setInventoryData] = useState<TItems>([]);
    const [marketplaceData, setMarketplaceData] = useState<TItems>();

    const handleFilterValue = (value: string) => {
        if (filterValue !== value) {
            setFilterValue(value);
        } else {
            setFilterValue('');
        };
    };

    const handleInventoryStatus = (value: boolean) => {
        setInventoryStatus(value);

        // fetchNui<TItems>('getInventoryData').then(value => {
            setInventoryData([
                {
                    "id": 1,
                    "name": "Weapon",
                    "type": "Weapon",
                    "price": 100000
                },
                {
                    "id": 2,
                    "name": "Weapon",
                    "type": "Weapon",
                    "price": 100000
                },
                {
                    "id": 3,
                    "name": "Weapon",
                    "type": "Weapon",
                    "price": 200000
                },
                {
                    "id": 4,
                    "name": "Weapon",
                    "type": "Weapon",
                    "price": 200000
                },
                {
                    "id": 5,
                    "name": "Ammo",
                    "type": "Ammo",
                    "price": 100000
                },
                {
                    "id": 6,
                    "name": "Ammo",
                    "type": "Ammo",
                    "price": 100000
                },
                {
                    "id": 7,
                    "name": "Ammo",
                    "type": "Ammo",
                    "price": 200000
                },
                {
                    "id": 8,
                    "name": "Ammo",
                    "type": "Ammo",
                    "price": 200000
                },
                {
                    "id": 9,
                    "name": "Other",
                    "type": "Other",
                    "price": 100000
                },
                {
                    "id": 10,
                    "name": "Other",
                    "type": "Other",
                    "price": 100000
                },
                {
                    "id": 11,
                    "name": "Other",
                    "type": "Other",
                    "price": 200000
                },
                {
                    "id": 12,
                    "name": "Other",
                    "type": "Other",
                    "price": 200000
                }
            ])
        // });
    };

    useEffect(() => {
        const keyHandler = (event: KeyboardEvent) => {
            if (['Escape'].includes(event.code)) {
                setInventoryStatus(false);
            };
        };

        window.addEventListener('keydown', keyHandler);

        return () => window.removeEventListener('keydown', keyHandler);
    }, [inventoryStatus])

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

                            <Button onClick={() => {handleInventoryStatus(!inventoryStatus)}}>
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
                
            {inventoryStatus && <Inventory data={inventoryData}/>}
        </Container>
    )
}

export default Marketplace;