export type ItemProps = {
    id: number,
    name: string,
    type: string,
    price?: number,
    text?: string;
    onClick?: () => void;
};