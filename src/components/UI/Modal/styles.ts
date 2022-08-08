import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    position: 'absolute',

    left: 0,
    top: 0,

    width: '100vw',
    height: '100vh',

    background: 'var(--background-modal)',
})

export const Buttons = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    margin: '3vmax 0vmax 0vmax 0vmax',
})