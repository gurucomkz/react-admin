import React from 'react';
import { ThroughProvider } from 'react-through'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth';
import { DrawerProvider } from './drawer';
import { MenuGroupProvider } from './menugroups';

function AppProviders({ children }) {
	return (
        <ThroughProvider>
            <BrowserRouter>
                <AuthProvider>
                    <DrawerProvider>
                        <MenuGroupProvider>
                            { children }
                        </MenuGroupProvider>
                    </DrawerProvider>
                </AuthProvider>
            </BrowserRouter>
        </ThroughProvider>
	);
}

export default AppProviders;
