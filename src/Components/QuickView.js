import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import QuickViewDrawer from './QuickViewDrawer';

export default function QuickView({
  object
}) {
    const {name} = object;
    const [open, setOpen] = useState(false);
    
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(true);
        return false;
    }

    const renderDrawer = () => {
        if(!open) return null;
        return (
            <QuickViewDrawer object={object} anchor="right" open={open} onClose={()=>setOpen(false)} />
        )
    }
    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={handleClick}
            >
                {name}
            </Button>
            {renderDrawer()}
        </React.Fragment>
    );
}
