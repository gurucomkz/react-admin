import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthState } from '../Context';

const AdminLayout = ({ children }) => {

	return (
		<div id="layout">
			{children}
		</div>
	);
};

export default AdminLayout;
