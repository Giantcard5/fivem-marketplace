import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
    GlobalStyles 
} from 'styles/global';

import Marketplace from 'pages/Marketplace';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        {GlobalStyles()}
        
        <Marketplace/>
    </React.StrictMode>
);