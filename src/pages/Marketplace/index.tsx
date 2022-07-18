import React, { useState } from 'react';

import { 
    Container, 
    Navigator,
    Separator,
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

import MainJSON from 'assets/main.json';

import PlusSVG from 'assets/icons/plus.svg';

const Marketplace: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [typeValue, setTypeValue] = useState('');

    function handleTypeValue(value: string) {
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
                                <Nav onClick={() => {handleTypeValue('Weapon')}}>
                                    <Text type='navigator'>Weapons</Text>
                                </Nav>

                                <Nav onClick={() => {handleTypeValue('Ammo')}}>
                                    <Text type='navigator'>Ammo</Text>
                                </Nav>

                                <Nav onClick={() => {handleTypeValue('Other')}}>
                                    <Text type='navigator'>Others</Text>
                                </Nav>
                            </Article>

                            <Button>
                                <Image src={PlusSVG} alt='Search'/>
                            </Button>
                        </Block>

                        <Separator/>
                    </Navigator>

                    <Grid>
                        {MainJSON.filter((value) => {
                            if (searchValue === '') {
                                if (typeValue === '') {
                                    return value;
                                } else if (typeValue === value.type) {
                                    return value;
                                }
                            } else if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
                                if (typeValue === '') {
                                    return value;
                                } else if (typeValue === value.type) {
                                    return value;
                                }
                            };

                            return false;
                        }).sort((a, b) => {
                            return a.price - b.price;
                        }).map((value, key) => (
                            <Item 
                                key={key}
                                name={value.name} 
                                type={value.type} 
                                price={value.price}
                            />
                        ))}
                    </Grid>
                </Section>
            </Content>
        </Container>
    )
}

export default Marketplace;