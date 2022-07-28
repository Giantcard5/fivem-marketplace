import { styled } from '@stitches/react';

export const Container = styled('button', {
    variants: {
        type: {
            image: {
                display: 'flex',
            },
            item: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            
                width: '100%',
                height: '12%',
            
                backgroundColor: 'var(--green-darker)',
            
                borderRadius: '0.1vmax',
            
                boxShadow: '0vmax 0vmax 1vmax rgb(13, 232, 132, 0.1)',
            
                transition: 'all .2s',
            
                '&:hover': {
                    boxShadow: '0vmax 0vmax 1vmax rgb(13, 232, 132, 0.3)',
                },
            },
            slot: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            
                width: '100%',
                height: '12%',
            
                backgroundColor: 'var(--green-darker)',
            
                borderRadius: '.1vmax',
            },
            search: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            
                width: '10%',
                height: '100%',
            },
        },
    },
});