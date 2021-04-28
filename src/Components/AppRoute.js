import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthState } from '../Context';
import AdminLayout from './AdminLayout';

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
	const userDetails = useAuthState();
	return (
		<Route
			path={path}
			render={(props) =>
				isPrivate && !Boolean(userDetails.token) ? (
					<Redirect to={{ pathname: '/login' }} />
				) : (
					<AdminLayout>
						<Component {...props} />
					</AdminLayout>
				)
			}
			{...rest}
		/>
	);
};

export default AppRoutes;
