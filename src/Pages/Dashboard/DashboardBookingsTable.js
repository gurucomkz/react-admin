
import React, { useEffect, useState } from 'react';
import { request } from '../../Context/actions';
import BookingProgressIndicator from './BookingProgressIndicator';
import { Checkbox, Snackbar, Typography } from '@material-ui/core';
import Table from '../../Components/Table';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function DashboardBookingsTable({title, endpoint, cbColName, cbAction, dateColName, dateColField, ...rest}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [checked, setChecked] = useState({});
    const [inventory, setInventory] = useState({});

    const renderDF = (row) => {
        return (<BookingProgressIndicator booking={row.row.original} />);
    }
    const onclickCB = (row) => {
        const payload = {
            id: row.id,
            val: (checked[row.id] ? 'not_' : '') + cbAction,
        };
        const current = checked[row.id];
        request('bookings/setcheckedstatus', payload, 'GET', true).then(
            (result) => {
                if(result === 'Success') {
                    setChecked({
                        [row.id]: !current,
                        ...checked,
                    })
                }
            },
            (error) => {
                console.log(error);
                setError(error);
            }
        )
    }
    const fieldCB = cbAction + '_at';
    const renderCB = (row) => {
        return (
            <Checkbox checked={!!checked[row.id]} onClick={()=>onclickCB(row.row.original)} />
        );
    }

    
    const columns = React.useMemo(
        () => [
            { accessor: fieldCB, Cell: renderCB, Header: cbColName, collapse: true},
            { accessor: 'id', Header: 'ID' },
            { accessor: 'user_name', Header: 'Tenant' },
            { accessor: 'property_code', Header: 'Property' },
            { accessor: dateColField, Header: dateColName },
            { accessor: 'nights', Header: 'Nights', collapse: true },
            { accessor: 'guests', Header: 'Guests', collapse: true },
            { accessor: 'paid', Cell: renderDF, Header: 'D | F', collapse: true },
        ],
        // eslint-disable-next-line
        [cbAction, dateColName, dateColField]
    );

    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setError(null);
    };

    const collectChecked = (rows) => {
        var obj = {};
        rows.forEach(row => { obj[row.id] = !!row[fieldCB] });
        setChecked(obj);
    }

    const loadRows = () => {
        setIsLoaded(false);
        request(endpoint).then(
            (result) => {
                setIsLoaded(true);
                setItems(result.items);
                collectChecked(result.items);
                setInventory(result.allocatedInventory);
            },
            (error) => {
                setIsLoaded(true);
                console.log(error);
                setError(error);
            }
        )
    }

    useEffect(loadRows, []);

    return (
        <div style={{ height: 400, width: '100%', marginTop: 30 }}>
            <Typography variant="h4">
                {title}
            </Typography>
            <Table
                data={items}
                columns={columns}
                // loading={!isLoaded}
            />
            <Snackbar open={!!error} autoHideDuration={6000} onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default DashboardBookingsTable;