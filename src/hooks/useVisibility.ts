import { Context, useContext } from 'react';

import { 
    VisibilityContext 
} from 'providers/VisibilityProvider';

import { 
    ProviderProps 
} from 'types/Provider';

export const useVisibility = () => useContext<ProviderProps>(VisibilityContext as Context<ProviderProps>);