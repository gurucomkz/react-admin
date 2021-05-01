import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth';
import { DrawerProvider } from './drawer';
import { MenuGroupProvider } from './menugroups';

function AppProviders({ children }) {
	return (
		<BrowserRouter>
			<AuthProvider>
				<DrawerProvider>
					<MenuGroupProvider>
						{ children }
					</MenuGroupProvider>
				</DrawerProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default AppProviders;
