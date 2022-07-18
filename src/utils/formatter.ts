export function formatter(value: number) {
    const formatter = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD'
    }).format(value);

    return formatter;
};