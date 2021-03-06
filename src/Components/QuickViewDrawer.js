import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import ReactLoader from './ReactLoader';
import { request } from '../Context/actions';

import { TableBody, TableCell, TableContainer, TableRow, Paper, Table, Typography } from '@material-ui/core';

export default function QuickViewDrawer({object, ...props}) {
    const {name, id, endpoint} = object;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    
    const block = (e) => {
        e.stopPropagation();
        e.preventDefault();
        props.onClose.call(this, e);
    };

    useEffect(() => {
        var aborted = false;
        request(endpoint, null, 'GET')
        .then(
            (result) => {
                if(aborted) return;
                setLoading(false);
                setData(result);
            },
            (error) => {
                if(aborted) return;
                props.onClose.call(this)
            },
        );
        return function cleanup() {
            aborted = true;
        }
    }, [ endpoint, props.onClose ]);
    
    const renderValue = (key) => {
        const value = data[key];
        switch(typeof value) {
            case 'object': return JSON.stringify(value);
            default: return value;
        }
    }
    const renderDetails = () => (
        <>
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
            <div style={{padding: '10px 10px 0 10px'}}>
                <Button variant="contained">
                    Open full
                </Button>
            </div>
        </>
    )
    return (
        <Drawer {...props} onClose={block}>
            <div style={{width: '30vw', padding: 10, display: 'flex', height: '100%', flexDirection: 'column'}}>
                <Typography variant="h4">
                    {name} #{id}
                </Typography>
                {/* eslint-disable-next-line */}
                {loading && <ReactLoader /> || renderDetails() }
            </div>
        </Drawer>
    );
}
