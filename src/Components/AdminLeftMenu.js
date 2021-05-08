import { Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useStyles } from '../Config/styles';
import { useDrawer, useMenuGroups } from '../Context';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PagesIcon from '@material-ui/icons/Pages';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

const AdminLeftMenu = () => {
	const classes = useStyles();
	const [open, setDrawerOpen] = useDrawer();
	const [ group ] = useMenuGroups();
	const history = useHistory();
    const location = useLocation();

	const handleDrawerClose = () => {
		setDrawerOpen(false);
	};

	const [itemsOpen, setItemsOpen] = React.useState({ '0':true }); //first always open
	const doOpen = (pos, isOpen) => {
		setItemsOpen({
			...itemsOpen,
			[pos]: isOpen
		});
	}
	
	const renderSubMenuItem = (li, key, pos) => {
		const handleClick = (subli) => {
			history.push(subli.path);
		};
		return (
			<Collapse in={itemsOpen[pos]} timeout="auto" unmountOnExit key={key}>
				<List component="div" disablePadding dense={true}>
					{li.items.map((subli, subkey) => {
                        const selected = location.pathname.indexOf(subli.path) === 0;
                        return (
                            <ListItem button selected={selected} className={classes.LMnested} key={key + '.' + subkey} onClick={()=>handleClick(subli)}>
                                <ListItemIcon>
                                    <PagesIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={subli.name} />
                            </ListItem>
                        );
                    })}
				</List>
			</Collapse>
		)
	};
	const renderMenuItem = (li, key, pos) => {
		const handleClick = () => {
			if(li.items) {
				doOpen(pos, !itemsOpen[pos]);
			} else {
				history.push(li.path);
			}
		};
		return (
			<ListItem button key={key} onClick={handleClick}>
				{!li.icon ? null :
					<ListItemIcon>
						{li.icon}
					</ListItemIcon>
				}
				<ListItemText primary={li.name} />
				{li.items ? (open ? <ExpandLess /> : <ExpandMore />) : null}
			</ListItem>
		)
	};
	const renderList = () => {
		var items = [];
		group.items.forEach((li, pos) => {
			items.push(renderMenuItem(li, items.length, pos));
			if(li.items){
				items.push(renderSubMenuItem(li, items.length, pos));
			}
		});
		return items;
	};

	const renderSubheader = () => (
		<ListSubheader component="div" id="nested-list-subheader">
			{group.name}
		</ListSubheader>
	);
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
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={renderSubheader()}
				className={classes.LMroot}>
				{renderList()}
			</List>
		
		</Drawer>
	);
};

export default AdminLeftMenu;
