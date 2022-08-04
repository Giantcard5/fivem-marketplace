import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',

    width: '40vw',
    height: '74vh',

    margin: '7.24vmax 0vmax 0vmax 1vmax',
});

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    width: '18.2vw',
    height: '74vh',
});

export const Block = styled('div', {
    display: 'flex',
    alignItems: 'center',

    height: '1.36vmax',
});

export const Navigator = styled('nav', {
    display: 'flex',
    flexDirection: 'column',

    margin: '0vmax 0vmax .42vmax 0vmax',
});

export const Section = styled('section', {
    display: 'flex',
    flexDirection: 'column',

    height: '38vmax',
});