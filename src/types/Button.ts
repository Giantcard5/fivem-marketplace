export type TButton = {
    onClick?: () => {} | void;
    text: string;
}

export type ButtonProps = {
    type: 'image' | 'item' | 'search' | 'slot';
    children?: React.ReactNode;
    onClick?: () => {} | void;
}