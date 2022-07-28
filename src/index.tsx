import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
    GlobalStyles 
} from 'styles/global';

import Marketplace from 'pages/Marketplace';

import { 
    VisibilityProvider 
} from 'providers/VisibilityProvider';

import { 
    debugData 
} from 'utils/debugData';

const root = ReactDOM.createRoot(document.getElementById('root')!);

debugData([
    {
        action: 'setVisible',
        data: true,
    },

]);

debugData([
    {
        action: 'getMarketplaceData',
        data: [
            {
                "id": 1,
                "name": "Weapon",
                "type": "Weapon",
                "price": 100000
            },
            {
                "id": 2,
                "name": "Weapon",
                "type": "Weapon",
                "price": 100000
            },
            {
                "id": 3,
                "name": "Weapon",
                "type": "Weapon",
                "price": 200000
            },
            {
                "id": 4,
                "name": "Weapon",
                "type": "Weapon",
                "price": 200000
            },
            {
                "id": 5,
                "name": "Ammo",
                "type": "Ammo",
                "price": 100000
            },
            {
                "id": 6,
                "name": "Ammo",
                "type": "Ammo",
                "price": 100000
            },
            {
                "id": 7,
                "name": "Ammo",
                "type": "Ammo",
                "price": 200000
            },
            {
                "id": 8,
                "name": "Ammo",
                "type": "Ammo",
                "price": 200000
            },
            {
                "id": 9,
                "name": "Other",
                "type": "Other",
                "price": 100000
            },
            {
                "id": 10,
                "name": "Other",
                "type": "Other",
                "price": 100000
            },
            {
                "id": 11,
                "name": "Other",
                "type": "Other",
                "price": 200000
            },
            {
                "id": 12,
                "name": "Other",
                "type": "Other",
                "price": 200000
            }
        ]
    }
]);

root.render(
    <React.StrictMode>
        <VisibilityProvider>
            {GlobalStyles()}
            
            <Marketplace/>
        </VisibilityProvider>
    </React.StrictMode>
);