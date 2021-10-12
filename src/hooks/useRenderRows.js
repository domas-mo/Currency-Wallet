import React from 'react';
import {useSelector} from 'react-redux';

import StyledTd from '../styled/Td.styled';

const useRenderRows = () => {
    const {currencies} = useSelector((state) => state.localStorage);
    const {rates} = useSelector((state) => state.currencyAPI);

    const renderTRows = () => {
        const rows = currencies.map((curr) => {
            const {
                currency, quantity, buyDate, buyPrice, key
            } = curr;
            const currentRate = () => (rates[currency] ? (rates.EUR / rates[currency]).toFixed(3) : 1);
            const totalValue = () => (quantity * (rates.USD / rates[currency])).toFixed(2);
            const difference = () => {
                const differenceUSD = totalValue() - (buyPrice * quantity);
                const percentage = (totalValue() * 100) / (buyPrice * quantity) - 100;

                return `${differenceUSD.toFixed(2)}${' '}(${percentage.toFixed(2)} %)`;
            };

            return (
				<tr key={key}>
					<StyledTd>{currency}</StyledTd>
					<StyledTd>{quantity}</StyledTd>
					<StyledTd>{buyDate}</StyledTd>
					<StyledTd>{buyPrice}</StyledTd>
					<StyledTd>{currentRate()}</StyledTd>
					<StyledTd>{totalValue()}</StyledTd>
					<StyledTd>{difference()}</StyledTd>
				</tr>
			);
        });
        return rows;
    };
    return [renderTRows()];
};

export default useRenderRows;