import { Context, useContext } from 'react';

import { 
    InventoryContext 
} from 'providers/InventoryProvider';

import { 
    ProviderProps 
} from 'types/Provider';

export const useInventory = () => useContext<ProviderProps>(InventoryContext as Context<ProviderProps>);