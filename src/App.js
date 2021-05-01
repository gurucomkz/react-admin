import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import routes from './Config/routes.js';
import { AppProviders } from './Context';
import { AppRoute, ReactLoader, AdminLayout } from './Components';

function App() {
	return (
		<AppProviders>
			<AdminLayout>
				<Suspense fallback={<ReactLoader />}>
					<Switch>
						{routes.map((route) => (
							<AppRoute
								key={route.path}
								path={route.path}
								component={route.component}
								isPrivate={route.isPrivate}
							/>
						))}
					</Switch>
				</Suspense>
			</AdminLayout>
		</AppProviders>
	);
}

export default App;
