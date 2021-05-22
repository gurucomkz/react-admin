import React, { useCallback, useEffect, useRef, useState } from 'react';
import { request } from '../../Context/actions';
import { useSnacksDispatch } from '../../Context/snacks';
import Table from '../Table';
import QuickView from '../QuickView';
import RowActions from './Utls/RowActions';
import { useHistory } from 'react-router';

function CRUDIndex({schema, endpoint, props}) {
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [columns, setColumns] = useState([]);
    const [items, setItems] = useState([]);
    const fetchIdRef = useRef(0);
    const history = useHistory();
    const errorHandler = useSnacksDispatch();

    useEffect(() => {
        const {summary, actions} = schema;
        var _columns = [];

        const getCellRenderer = (f) => {
            return ({row}) => {
                const val = row.original[f];
                if(null===val) return null;
                if('object' === typeof val) {
                    return (
                        <QuickView object={val} />
                    )
                }
                return (
                    <>{val}</>
                )
            };
        }
        for(var f in summary) {
            _columns.push({
                Header: summary[f],
                id: f,
                Cell: getCellRenderer(f)
            });
        }
        if(actions && actions.length){
            _columns.push({
                Header: '',
                id: 'row_actions',
                Cell: (row) => (
                    <RowActions row={row} endpoint={endpoint} actions={schema.actions} />
                )
            });
        }
        setColumns(_columns);
    },
    // eslint-disable-next-line
    [schema, endpoint]);

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
                errorHandler(error);
            }
        )
    }, 
    // eslint-disable-next-line
    [endpoint]);

    const onRowClick = (row) => {
        history.push(endpoint + '/view/' + row.original.id);
    }
    
    return (
        <Table
            data={items}
            fetchData={loadRows}
            columns={columns}
            loading={loading}
            manualPagination={true}
            className="crud"
            pageCount={pageCount}
            onRowClick={onRowClick}
        />
    );
}

export default CRUDIndex;
