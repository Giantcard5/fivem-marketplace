import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
    GlobalStyles 
} from 'styles/global';

import Marketplace from 'pages/Marketplace';

import { 
    VisibilityProvider 
} from 'providers/VisibilityProvider';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <VisibilityProvider>
            {GlobalStyles()}
            
            <Marketplace/>
        </VisibilityProvider>
    </React.StrictMode>
);