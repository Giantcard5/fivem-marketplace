import React, { 
    createContext,
    useState 
} from 'react';

import { 
    ChildrenProps 
} from 'types/Children';

export type ItemProviderProps = {
    setVisible: (
        visible: boolean
    ) => void;
    visible: boolean;
};

export const ItemContext = createContext<ItemProviderProps | null>(null);

export const ItemProvider: React.FC<ChildrenProps> = (props) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <ItemContext.Provider value={{ visible, setVisible }}>
            {props.children}
        </ItemContext.Provider>
    );
};