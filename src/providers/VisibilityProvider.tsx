import React, { useEffect, useState, createContext } from 'react';

import { 
    ChildrenProps 
} from 'types/Children';

import { 
    ProviderProps 
} from 'types/Provider';

import {
    useNuiEvent 
} from 'hooks/useNuiEvent';

import {
    fetchNui 
} from 'utils/fetchNui';

import { 
    isEnvBrowser 
} from 'utils/misc';

export const VisibilityContext = createContext<ProviderProps | null>(null);

export const VisibilityProvider: React.FC<ChildrenProps> = (props) => {
    const [visible, setVisible] = useState<boolean>(false);

    useNuiEvent<boolean>('setVisible', setVisible);

    useEffect(() => {
        if (!visible) return;

        const keyHandler = (e: KeyboardEvent) => {
            if (['Escape'].includes(e.code)) {
                if (!isEnvBrowser()) fetchNui('hideFrame');
                else setVisible(!visible);
            }
        };

        window.addEventListener('keydown', keyHandler);

        return () => window.removeEventListener('keydown', keyHandler);
    }, [visible]);

    return (
        <VisibilityContext.Provider
            value={{
                visible,
                setVisible
            }}
        >
            <div style={{ visibility: visible ? 'visible' : 'hidden', height: '100%'}}>
                {props.children}
            </div>
        </VisibilityContext.Provider>
    );
};