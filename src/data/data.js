export const fields = [
    { name: 'currency', type: 'text', placeholder: 'Currency' },
    { name: 'quantity', type: 'number', placeholder: 'Amount' },
    { name: 'buyDate', type: 'date', placeholder: 'Buy date' },
    { name: 'buyPrice', type: 'number', placeholder: 'Buy price' },
];

export const tableHeaders = [
    'Currency',
    'Amount',
    'Buy date',
    'Buy price',
    'Current course',
    'Current value',
    'Difference',
];

export const init = {
    currency: '',
    quantity: '',
    buyDate: '',
    buyPrice: '',
    key: '',
};