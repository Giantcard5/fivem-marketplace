import { 
    styled 
} from '@stitches/react';

export const Container = styled('main',{
    display: 'flex',

    width: '100vw',
    height: '100vh',

    background: 'var(--background)',
});

export const Content = styled('main', {
    display: 'flex',
    flexDirection: 'column',

    width: '18.2vw',
    height: '90vh',

    margin: '2vmax 0vmax 0vmax 2.4vmax',
});

export const Section = styled('section', {
    display: 'flex',
    flexDirection: 'column',
});

export const Navigator = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    margin: '0vmax 0vmax .4vmax 0vmax',
});

export const Block = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
});

export const Article = styled('article', {
    display: 'flex',
    alignItems: 'center',

    height: '1.38vmax',
});