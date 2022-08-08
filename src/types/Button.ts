export type ButtonProps = {
    type: 'image' | 'item' | 'search' | 'slot' | 'modal';
    onClick?: () => void;
}