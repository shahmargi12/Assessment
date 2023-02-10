import React from 'react';
import DataTable, { IDataTableProps, TableStyles } from 'react-data-table-component';
import Checkbox from '../Checkbox';
import CircularLoader from '../CircularLoader';
import { styledComponent, StyledNoDataComponent } from './DataTable.styled';

const NoDataComponent = <StyledNoDataComponent>There are no records to display</StyledNoDataComponent>;

interface DataTablesProps<T> extends IDataTableProps<T> {
    customStyleOveride: Partial<TableStyles>;
    loaderHeight: string;
}

const DataTables = <T,>({
    columns,
    data,
    selectableRows,
    selectableRowsComponent = Checkbox,
    onSelectedRowsChange,
    selectableRowSelected,
    fixedHeader = false,
    fixedHeaderScrollHeight = '100%',
    customStyleOveride = {},
    progressPending,
    selectableRowsNoSelectAll = false,
    noDataComponent = NoDataComponent,
    loaderHeight,
}: DataTablesProps<T>): JSX.Element => {
    return (
        <DataTable<T>
            columns={columns}
            data={data}
            customStyles={{ ...styledComponent, ...customStyleOveride }}
            selectableRows={selectableRows}
            selectableRowsComponent={selectableRowsComponent}
            onSelectedRowsChange={onSelectedRowsChange}
            selectableRowSelected={selectableRowSelected}
            fixedHeader={fixedHeader}
            fixedHeaderScrollHeight={fixedHeaderScrollHeight}
            progressComponent={<CircularLoader height={loaderHeight} size="3rem" />}
            noDataComponent={noDataComponent}
            progressPending={progressPending}
            selectableRowsNoSelectAll={selectableRowsNoSelectAll}
        ></DataTable>
    );
};

export default DataTables;
