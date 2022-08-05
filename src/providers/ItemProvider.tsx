import React, { useState, createContext } from 'react';

import { 
    ChildrenProps 
} from 'types/Children';

import { 
    ProviderProps 
} from 'types/Provider';

export const ItemContext = createContext<ProviderProps | null>(null);

export const ItemProvider: React.FC<ChildrenProps> = (props) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <ItemContext.Provider value={{ visible, setVisible }}>
            {props.children}
        </ItemContext.Provider>
    );
};