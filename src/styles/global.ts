import { 
    globalCss 
} from '@stitches/react';

import './input.css';

export const GlobalStyles = globalCss({
    '*': {
        margin: '0',
        padding: '0',
    
        boxSizing: 'border-box',
        userSelect: 'none',
    },

    'body, html': {
        height: '100%',
    },

    'body, input, textarea, select, button': {
        fontSize: '1vmax',
        fontWeight: '400',
        fontFamily: 'Montserrat, sans-serif',

        color: 'var(--white)'
    },

    'button': {
        border: 'none',
        background: 'none',

        cursor: 'pointer',
    },

    'input': {
        border: 'none',
        background: 'none',

        cursor: 'auto',

        '&:focus': {
            outline: 'none',
        }
    },
    
    ':root': {
        '--white': '#EBEBEB',

        '--green': '#0DE884',
        '--green-darker': '#35B87D',
        
        '--background': 'rgba(10, 10, 20, 1)',
        '--background-gradient': 'linear-gradient(90deg, rgba(10, 10, 20, 1) 0%, rgba(10, 10, 20, 1) 40%, rgba(10, 10, 20, 0.6) 100%)',
    },
});