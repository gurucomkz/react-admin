import React from 'react';
import { AuthProvider } from './auth';
import { DrawerProvider } from './drawer';

function AppProviders({ children }) {
	return (
		<AuthProvider>
			<DrawerProvider>
				{ children }
			</DrawerProvider>
		</AuthProvider>
	);
}

export default AppProviders;
