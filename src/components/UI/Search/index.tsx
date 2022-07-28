import React from 'react';

import { 
    Container,
    Input
} from './styles';

import Button from 'components/UI/Button';
import Image from 'components/UI/Image';

import SearchSVG from 'assets/icons/search.svg';

import { 
    SearchProps
} from 'types/Search';

const Search: React.FC<SearchProps> = ({...rest}) => {
    return (
        <Container>
            <Input {...rest}/>
            
            <Button type='search'>
                <Image 
                    type='search' 
                    src={SearchSVG}
                    alt='Search'
                />
            </Button>
        </Container>
    )
}

export default Search;