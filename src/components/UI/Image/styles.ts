import { styled } from '@stitches/react';

export const Container = styled('img', {
    variants: {
        type: {
            plus: {
                width: '1.2vmax',
                height: '1.2vmax',
            },
            minus: {
                width: '1.2vmax',
                height: '1.2vmax',
            },
            search: {
                width: '60%',
                height: '60%',
            },
        },
    },
});