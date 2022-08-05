import React, { 
    createContext,
    useEffect,
    useState 
} from 'react';

import { 
    ChildrenProps 
} from 'types/Children';

import { 
    ProviderProps 
} from 'types/Provider';

export const InventoryContext = createContext<ProviderProps | null>(null);

export const InventoryProvider: React.FC<ChildrenProps> = (props) => {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        if (!visible) return;

        const keyHandler = (e: KeyboardEvent) => {
            if (['Escape'].includes(e.code)) {
                setVisible(!visible);
            }
        };

        window.addEventListener('keydown', keyHandler);

        return () => window.removeEventListener('keydown', keyHandler);
    }, [visible])

    return (
        <InventoryContext.Provider value={{ visible, setVisible }}>
            {props.children}
        </InventoryContext.Provider>
    );
};