export type TText = {
    type?: 'title' | 'subtitle' | 'price' | 'item' | 'button' | 'navigator';
    children: React.ReactNode;
}