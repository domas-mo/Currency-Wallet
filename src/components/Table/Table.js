import React from 'react';
import useRenderRows from '../../hooks/useRenderRows';
import {tableHeaders} from '../../data/data';

const style = {
    padding: '20px',
    border: '1px solid black'
}

const TableContainer = () => {
    const [renderTRows] = useRenderRows();

    const renderTheads = () => {
		return tableHeaders.map((head) => {
			return <th style={style} key={head}>{head}</th>;
		});
	};

    return (
        <table>
            <thead>
                <tr>{renderTheads()}</tr>
            </thead>
            <tbody>{renderTRows}</tbody>
        </table>
    );
};

export default TableContainer;