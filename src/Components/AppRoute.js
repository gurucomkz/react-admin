import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../Context';

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
	const [userDetails] = useAuth();
	return (
		<Route
			path={path}
			render={(props) =>
				isPrivate && !Boolean(userDetails.token) ? (
					<Redirect to={{ pathname: '/login' }} />
				) : (
					<Component {...props} />
				)
			}
			{...rest}
		/>
	);
};

export default AppRoutes;
