import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',

    width: '100%',
    height: '1.6vmax',

    margin: '-.2vmax 0vmax 0vmax 0vmax',

    boxShadow: 'inset 0vmax 0vmax 1vmax rgba(213, 213, 213, 0.05)',

    background: 'rgb(255, 255, 255, 0.05)',
    borderRadius: '.1vmax',
});

export const Content = styled('input', {
    width: '100%',
    height: '100%',

    padding: '0vmax .6vmax',

    fontSize: '.6vmax',
    fontWeight: '500',

    color: 'var(--white)',

    '&::placeholder': {
        color: 'rgb(235, 235, 235, 0.8)',
    },
});