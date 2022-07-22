import { 
    MouseEventHandler 
} from 'react';

export type TNav = {
    children: React.ReactNode;
    onClick?: MouseEventHandler | undefined;
}