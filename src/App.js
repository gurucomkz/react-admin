import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './Config/routes.js';
import { AuthProvider } from './Context';
import { AppRoute, ReactLoader} from './Components';

function App() {
	return (
		<AuthProvider>
			<Router>
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
			</Router>
		</AuthProvider>
	);
}

export default App;
