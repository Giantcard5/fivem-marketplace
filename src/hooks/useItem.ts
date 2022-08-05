import { Context, useContext } from 'react';

import { 
    ItemContext 
} from 'providers/ItemProvider';

import { 
    ProviderProps 
} from 'types/Provider';

export const useItem = () => useContext<ProviderProps>(ItemContext as Context<ProviderProps>);