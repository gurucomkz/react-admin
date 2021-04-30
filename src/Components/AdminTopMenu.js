import { Button } from '@material-ui/core';
import React from 'react';
import MenuGroups from '../Config/MenuGroups';
import { useMenuGroups } from '../Context';

const AdminTopMenu = () => {
	const groupcodes = Object.keys(MenuGroups);
	const [ group, setGroup ] = useMenuGroups();

	return (
		<div>
			{groupcodes.map((gc) => (
				<Button
					variant="contained"
					color="secondary"
					onClick={setGroup(gc)} 
				>{MenuGroups[gc].name}</Button>
			))}
		</div>
	);
};

export default AdminTopMenu;
