import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',

    width: '100%',
    height: '1.6vmax',

    margin: '0vmax 0vmax .8vmax 0vmax',

    boxShadow: 'inset 0vmax 0vmax 1vmax rgba(213, 213, 213, 0.05)',

    background: 'rgb(255, 255, 255, 0.05)',
    borderRadius: '.1vmax',
});

export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '10%',
    height: '100%',
});

export const Image = styled('img', {
    width: '60%',
    height: '60%',
});

export const Input = styled('input', {
    width: '90%',
    height: '100%',

    padding: '0vmax .6vmax',

    fontSize: '.6vmax',
    fontWeight: '500',

    color: 'var(--white)',

    '&::placeholder': {
        color: 'rgb(235, 235, 235, 0.8)',
    }
});