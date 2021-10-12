import React from 'react';
import useRenderRows from '../../hooks/useRenderRows';
import {tableHeaders} from '../../data/data';

import StyledTh from '../../styled/Th.styled';
import StyledTable from '../../styled/Table.styled';

const TableContainer = () => {
    const [renderTRows] = useRenderRows();

    const renderTheads = () => {
		return tableHeaders.map((head) => {
			return <StyledTh key={head}>{head}</StyledTh>;
		});
	};

    return (
        <StyledTable>
            <thead>
                <tr>{renderTheads()}</tr>
            </thead>
            <tbody>{renderTRows}</tbody>
        </StyledTable>
    );
};

export default TableContainer;