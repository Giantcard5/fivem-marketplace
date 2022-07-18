import React from 'react';

import { 
    Container,
    Button,
    Image,
    Input
} from './styles';

import { 
    TSearch
} from 'types/Search';

import SearchSVG from 'assets/icons/search.svg';

const Search: React.FC<TSearch> = ({...rest}) => {
    return (
        <Container>
            <Input {...rest}/>
            
            <Button type='submit'>
                <Image src={SearchSVG} alt='Search'/>
            </Button>
        </Container>
    )
}

export default Search;