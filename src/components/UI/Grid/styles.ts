import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 6.35vmax)',
    
    rowGap: '1vmax',

    maxHeight: '38vmax',
    overflow: 'hidden',

    overflowY: 'scroll',

    '&::-webkit-scrollbar': { 
        width: '0px',
        height: '0px',
    },

    '&::-webkit-scrollbar-track': { 
        background: 'none',
    },
})