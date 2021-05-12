import React, { useRef, useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';

function RowActions({row, actions, ...props}) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setOpen((prevOpen) => !prevOpen);
        return false;
    };
    
    const handleClick = (event, action) => {
        event.preventDefault();
        event.stopPropagation();
        setOpen(false);
        // TODO
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    
    return (
        <>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <MoreHorizIcon fontSize="small" />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{zIndex:1}}>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {actions.map((action, pos) => (
                                        <MenuItem 
                                            key={'mi' + pos}
                                            onClick={(e) => handleClick(e, action)}>
                                            {action.name}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    )
}

export default RowActions;
