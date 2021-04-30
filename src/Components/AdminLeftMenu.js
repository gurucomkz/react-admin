import { Divider, Drawer, IconButton, List } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useStyles } from '../Config/styles';
import { useDrawerDispatch, useDrawerState } from '../Context';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const AdminLeftMenu = ({ children }) => {
	const classes = useStyles();
	const open = useDrawerState();
	const setOpen = useDrawerDispatch();

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<Drawer
			variant="permanent"
			classes={{
				paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
			}}
			open={open}
		>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			{children}
			{/* <List>{mainListItems}</List>
			<Divider />
			<List>{secondaryListItems}</List> */}
		</Drawer>
	);
};

export default AdminLeftMenu;
