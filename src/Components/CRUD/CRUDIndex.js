import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useStyles } from '../../Config/styles';
import { request } from '../../Context/actions';
import Table from '../Table';

function CRUDIndex({schema, endpoint, props}) {
    const styles = useStyles();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [items, setItems] = useState([]);
    const fetchIdRef = useRef(0);

    const {summary} = schema;

    var columns = [];
    for(var f in summary) {
        columns.push({
            Header: summary[f],
            accessor: f
        });
    }

    const loadRows = useCallback(({ pageSize, pageIndex }) => {
        setLoading(true);
        
        const fetchId = ++fetchIdRef.current
        const query = {
            _draw: fetchId,
            _start: pageIndex * pageSize,
            _length: pageSize
        };
        request(endpoint, query, 'GET')
        .then(
            (result) => {
                if (fetchId === fetchIdRef.current) {
                    setLoading(false);
                    setItems(result.data);
                    setPageCount(Math.ceil(result.recordsFiltered / pageSize));
                }
            },
            (error) => {
                if (fetchId === fetchIdRef.current) {
                    setLoading(false);
                }
                setError(error);
            }
        )
    }, []);
    
    return (
        <Table
            data={items}
            fetchData={loadRows}
            columns={columns}
            loading={!loading}
            manualPagination={true}
            className="crud"
            pageCount={pageCount}
        />
    );
}

export default CRUDIndex;