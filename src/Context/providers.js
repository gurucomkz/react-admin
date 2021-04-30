import React from 'react';
import { AuthProvider } from './auth';
import { DrawerProvider } from './drawer';
import { MenuGroupProvider } from './menugroups';

function AppProviders({ children }) {
	return (
		<AuthProvider>
			<DrawerProvider>
				<MenuGroupProvider>
					{ children }
				</MenuGroupProvider>
			</DrawerProvider>
		</AuthProvider>
	);
}

export default AppProviders;
