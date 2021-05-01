import { Button } from '@material-ui/core';
import React from 'react';
import MenuGroups from '../Config/MenuGroups';
import { useMenuGroups } from '../Context';

const AdminTopMenu = () => {
	const groupcodes = Object.keys(MenuGroups);
	const [ group, setGroup ] = useMenuGroups();

	return groupcodes.map((gc, i) => (
			<Button
				key={i}
				variant="contained"
				color="secondary"
				onClick={()=>setGroup(gc)} 
			>
				{MenuGroups[gc].name}
			</Button>
		)
	);
};

export default AdminTopMenu;
