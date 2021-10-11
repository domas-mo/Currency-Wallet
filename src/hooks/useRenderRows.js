import React from 'react';
import {useSelector} from 'react-redux';

const style = {
    textAlign: 'center',
    border: '1px solid black',
    padding: '5px'
}

const useRenderRows = () => {
    const {currencies} = useSelector((state) => state.localStorage);
    const {rates} = useSelector((state) => state.currencyAPI);

    const renderTRows = () => {
        const rows = currencies.map((curr) => {
            const {
                currency, quantity, purchaseDate, purchasePrice, key
            } = curr;
            const currentRate = () => (rates[currency] ? (rates.EUR / rates[currency]).toFixed(3) : 1);
            const totalValue = () => (quantity * (rates.USD / rates[currency])).toFixed(2);
            const difference = () => {
                const differenceUSD = totalValue() - (purchasePrice * quantity);
                const percentage = (totalValue() * 100) / (purchasePrice * quantity) - 100;

                return `${differenceUSD.toFixed(2)}${' '}(${percentage.toFixed(2)} %)`;
            };

            return (
				<tr key={key}>
					<td style={style}>{currency}</td>
					<td style={style}>{quantity}</td>
					<td style={style}>{purchaseDate}</td>
					<td style={style}>{purchasePrice}</td>
					<td style={style}>{currentRate()}</td>
					<td style={style}>{totalValue()}</td>
					<td style={style}>{difference()}</td>
				</tr>
			);
        });
        return rows;
    };
    return [renderTRows()];
};

export default useRenderRows;