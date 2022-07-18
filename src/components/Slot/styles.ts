import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',

    flexDirection: 'column',

    width: '5.5vmax',
    height: '7.5vmax',
});

export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '12%',

    backgroundColor: 'var(--green-darker)',

    borderRadius: '.1vmax',
});

export const Image = styled('div', {
    width: '100%',
    height: '75%',

    border: '.15vmax solid rgb(255, 255, 255, 0.4)'
});