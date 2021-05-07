import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import ReactLoader from './ReactLoader';
import { request } from '../Context/actions';

import { TableBody, TableCell, TableContainer, TableRow, Paper, Table } from '@material-ui/core';

export default function QuickViewDrawer({object, ...props}) {
    const {name, id, endpoint} = object;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    
    useEffect(() => {
        request(endpoint, null, 'GET')
        .then(
            (result) => {
                setLoading(false);
                setData(result);
            },
            (error) => {
                props.onClose.call(this)
            },
        )
    }, [ endpoint, props.onClose ]);
    
    const renderValue = (key) => {
        const value = data[key];
        switch(typeof value) {
            case 'object': return JSON.stringify(value);
            default: return value;
        }
    }
    const renderDetails = () => (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    {Object.keys(data||{}).map((key) => (
                        <TableRow key={key}>
                            <TableCell component="th" scope="row">
                                {key}
                            </TableCell>
                            <TableCell>
                                {renderValue(key)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
    return (
        <Drawer {...props}>
            <div style={{width: '30vw', padding: 10}}>
                {loading && <ReactLoader /> || renderDetails() }
            </div>
        </Drawer>
    );
}
