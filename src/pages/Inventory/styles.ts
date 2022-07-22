import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',

    width: '40vw',
    height: '74vh',

    margin: '7.25vmax 0vmax 0vmax 1vmax',
});

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    width: '18.2vw',
    height: '74vh',
})

export const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 6.35vmax)',
    rowGap: '1vmax',
    maxHeight: '38vmax',

    overflow: 'hidden',

    overflowY: 'scroll',

    '&::-webkit-scrollbar': { 
        width: '0px',
        height: '0px'
    },

    '&::-webkit-scrollbar-track': { 
        background: 'none'
    },
})

export const Header = styled('header', {
    display: 'flex',

    flexDirection: 'column',
})

export const Block = styled('div', {
    display: 'flex',
    alignItems: 'center',

    height: '1.44vmax',
})

export const Footer = styled('footer', {
    display: 'flex',
    justifyContent: 'center',

    margin: '1vmax 0vmax 0vmax 0vmax',

    height: '4vh',
})

export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '5.5vmax',
    height: '2vmax',

    backgroundColor: 'var(--green-darker)',

    borderRadius: '0.1vmax',

    boxShadow: '0vmax 0vmax 1vmax rgb(13, 232, 132, 0.1)',

    transition: 'all .2s',

    '&:hover': {
        boxShadow: '0vmax 0vmax 1vmax rgb(13, 232, 132, 0.3)',
    },
})

export const Navigator = styled('nav', {
    display: 'flex',
    flexDirection: 'column',

    margin: '0vmax 0vmax .4vmax 0vmax',
})

export const Section = styled('section', {
    display: 'flex',
    flexDirection: 'column',

    height: '38vmax',
});