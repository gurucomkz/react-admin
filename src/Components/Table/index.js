
import React from 'react';
import { useTable, usePagination } from 'react-table'
import LoadingRow from './LoadingRow';
import TablePagination from './TablePagination';
import TableStyles from './TableStyles';

function Table({ 
    columns, 
    data,
    fetchData,
    loading,
    className,
    manualPagination,
    onRowClick,
    pageCount: controlledPageCount,
}) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 50 },
            manualPagination,
            pageCount: controlledPageCount,
        },
        usePagination
    );

    const paginationProps = {
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        pageIndex,
        pageSize,
    };

    React.useEffect(() => {
        if('function'=== typeof fetchData) {
            fetchData({ pageIndex, pageSize });
        }
    }, [fetchData, pageIndex, pageSize])

    const renderPage = () => {
        if (loading) {
            var a = [];
            for(var r=0; r < pageSize; r++) {
                a.push(
                    <LoadingRow colSpan={columns.length} key={r} />
                );
            }
            return a;
        }
        return page.map((row, i) => {
            prepareRow(row);
            var auxRowProps = {};
            if(onRowClick && ('function' === typeof onRowClick)) {
                auxRowProps.onClick = () => onRowClick(row);
            }
            return (
                <tr {...row.getRowProps()} {...auxRowProps}>
                    {row.cells.map(cell => {
                        return (
                            <td
                                {...cell.getCellProps({
                                    className: cell.column.collapse ? 'collapse' : '',
                                })}
                            >
                                {cell.render('Cell')}
                            </td>
                        )
                    })}
                </tr>
            )
        })
    }
    return (
        <TableStyles>
            <div className={"tableWrap " + className}>
                <div className="tableWrapInner">
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps({
                                    className: column.collapse ? 'collapse' : '',
                                    })}
                                >
                                    {column.render('Header')}
                                </th>
                                ))}
                            </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {renderPage()}
                        </tbody>
                    </table>
                </div>
                <TablePagination 
                    {...paginationProps}
                />
            </div>
        </TableStyles>
    )
}

export default Table;
