import React from 'react';
// import Grid from '@material-ui/core/Grid';

import AdminLeftMenu from './AdminLeftMenu';
import { AppBar, Badge, Container, CssBaseline, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from '../Config/styles';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import { useDrawer } from '../Context';
import AdminTopMenu from './AdminTopMenu';

const AdminLayout = ({ children }) => {
	const classes = useStyles();
	const [open, setOpen] = useDrawer();
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
					>
						<MenuIcon />
					</IconButton>
					<AdminTopMenu />
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<AdminLeftMenu />
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					{children}
				</Container>
			</main>
		</div>
		
	);
};

export default AdminLayout;
