
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useLocalStyles = makeStyles((theme) => ({
    progress: {
        fontWeight: 'bold',
        maxHeight: '30px',
        lineHeight: '30px',
        textAlign: 'center',
        width: '100%',
        display: 'flex'
    },
    progressItem: {
        flex: 1,
    }
}));

function BookingProgressIndicator({booking}) {
    const classes = useLocalStyles();
    var bg = 'lightgreen';
    var caption = '';
    if (booking.bookingtotal <= 0 && booking.type !== 'public') {
        if (booking.type === 'private') {
            caption = 'PVT';
        } else {
            caption = 'OWN';
            bg = 'lightblue';
        }
        
        return (
            <div className={classes.progress} style={{backgroundColor: bg}}>
                <div className={classes.progressItem}>
                    {caption}
                </div>
            </div>
        );
    }

    return (
        <div className={classes.progress}>
            <div className={classes.progressItem} style={{backgroundColor: booking.paid ? 'green' : (booking.deposit_received ? 'orange' : 'silver') }}>
                D
            </div>
            <div className={classes.progressItem} style={{backgroundColor: booking.paid ? 'green' : 'silver' }}>
                F
            </div>
        </div>
    );
}

export default BookingProgressIndicator;