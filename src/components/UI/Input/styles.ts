import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',

    width: '100%',
    height: '15%'
});

export const Content = styled('input', {
    width: '100%',
    height: '100%',

    fontSize: '.6vmax',
    fontWeight: '600',

    '&::placeholder': {
        color: 'var(--white)',
        
        filter: 'drop-shadow(0vmax 0vmax .2vmax rgba(235, 235, 235, 0.4))',
    },    
});

export const Text = styled('span', {
    padding: '0vmax .2vmax 0vmax .4vmax',

    fontSize: '.6vmax',
    fontWeight: '600',

    color: 'var(--white)',
    
    filter: 'drop-shadow(0vmax 0vmax .2vmax rgba(235, 235, 235, 0.4))',
});