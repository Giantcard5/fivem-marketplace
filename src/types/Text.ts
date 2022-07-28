export type TextProps = {
    type?: 'title' | 'subtitle' | 'price' | 'item' | 'items' | 'button' | 'navigator' | 'send';
    children: React.ReactNode;
}