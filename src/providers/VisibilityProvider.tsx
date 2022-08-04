import React, { 
    Context, 
    createContext, 
    useContext, 
    useEffect, 
    useState 
} from 'react';

import { 
    ChildrenProps 
} from 'types/Children';

import {
    useNuiEvent 
} from 'hooks/useNuiEvent';

import {
    fetchNui 
} from 'utils/fetchNui';

import { 
    isEnvBrowser 
} from 'utils/misc';

const VisibilityContext = createContext<VisibilityProviderValue | null>(null);

interface VisibilityProviderValue {
    setVisible: (
        visible: boolean
    ) => void;
    visible: boolean;
};

export const VisibilityProvider: React.FC<ChildrenProps> = (props) => {
    const [visible, setVisible] = useState(false);

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
    }, [visible])

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
    )
}

export const useVisibility = () => useContext<VisibilityProviderValue>(VisibilityContext as Context<VisibilityProviderValue>);