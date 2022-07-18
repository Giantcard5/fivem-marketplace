import { 
    styled 
} from '@stitches/react';

export const Container = styled('main',{
    display: 'flex',

    width: '100vw',
    height: '100vh',

    background: 'linear-gradient(90deg, rgba(10,10,20,1) 0%, rgba(10,10,20,0.9780287114845938) 35%, rgba(10,10,20,0.9023984593837535) 80%)',
});

export const Content = styled('main', {
    display: 'flex',
    flexDirection: 'column',

    width: '18.2vw',
    height: '90vh',

    margin: '2vmax 0vmax 0vmax 2.4vmax',
});

export const Header = styled('header', {
    display: 'flex',

    flexDirection: 'column',
});

export const Section = styled('section', {
    display: 'flex',

    flexDirection: 'column',
});

export const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 6.4vmax)',
    
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
    }
})

export const Navigator = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    margin: '0vmax 0vmax .4vmax 0vmax',
})

export const Separator = styled('div', {
    margin: '.4vmax 0vmax .0vmax 0vmax',

    width: '100%',
    height: '.2vmax',

    background: 'linear-gradient(90deg, rgba(52,151,116,1) 0%, rgba(13,232,132,0.30575980392156865) 69%)',
})

export const Block = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
})

export const Article = styled('article', {
    display: 'flex',
    alignItems: 'center',
})

export const Image = styled('img', {
    width: '1.2vmax',
    height: '1.2vmax',
})

export const Button = styled('button', {
    
})