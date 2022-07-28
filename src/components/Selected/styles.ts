import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    width: '9vmax',
    height: '11.8vmax',

    margin: '4.85vmax 0vmax 0vmax 1vmax',
});

export const Image = styled('div', {
    width: '100%',
    height: '75%',

    border: '0.15vmax solid rgba(213, 213, 213, 0.1)',
    borderRadius: '0.1vmax',

    boxShadow: 'inset 0vmax 0vmax 2vmax rgba(213, 213, 213, 0.05)',

    transition: 'all .2s',

    '&:hover': {
        border: '0.15vmax solid rgb(213, 213, 213, 0.2)',

        boxShadow: 'inset 0vmax 0vmax 2vmax rgba(213, 213, 213, 0.1)',
    }
});

export const Block = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '1.15vmax',

    margin: '.1vmax 0vmax',

    background: 'rgba(213,213,213,0.01)',

    border: '.1vmax solid rgba(213,213,213,0.02)',
    borderRadius: '0.1vmax',
});