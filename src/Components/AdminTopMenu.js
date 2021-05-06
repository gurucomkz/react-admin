import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import MenuGroups from '../Config/MenuGroups';
import { useMenuGroups } from '../Context';
import { useStyles } from '../Config/styles';

const AdminTopMenu = () => {
	const classes = useStyles();
	const groupcodes = Object.keys(MenuGroups);
	// eslint-disable-next-line
	const [ group, setGroup ] = useMenuGroups();
	const history = useHistory();

	const handleClick = (gc) => {
		const thisgroup = MenuGroups[gc];
		if(thisgroup.items) {
			setGroup(gc)
		} else {
			history.push(thisgroup.path);
		}
	}

	return (
		<div className={classes.grow}>
			{groupcodes.map((gc, i) => (
				<Button
					key={i}
					size="large"
					variant="contained"
					color={MenuGroups[gc] === group ? 'secondary' : 'default'}
					disableElevation
					onClick={()=>handleClick(gc)} 
				>
					{MenuGroups[gc].name}
				</Button>
			))}
		</div>
	);
};

export default AdminTopMenu;
