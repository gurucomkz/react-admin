import { Button, ButtonGroup } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import React from 'react';

function TablePagination(props) {
    const {
        canPreviousPage,
        canNextPage,
        setPageSize,
        pageCount,
        pageIndex,
        pageOptions,
        gotoPage,
        previousPage,
        nextPage,
        pageSize,
    } = props;
    return (
        <div className="pagination">
            <ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
                <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <FirstPageIcon fontSize="small" />
                </Button>
                <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <KeyboardArrowLeftIcon fontSize="small" />
                </Button>
                <Button onClick={() => nextPage()} disabled={!canNextPage}>
                    <KeyboardArrowRightIcon fontSize="small" />
                </Button>
                <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <LastPageIcon fontSize="small" />
                </Button>
            </ButtonGroup>
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
            | Go to page:{' '}
            <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                }}
                style={{ width: '100px' }}
            />
            </span>{' '}
            <select
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
                >
                {[50, 100, 200, 500].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default TablePagination;
