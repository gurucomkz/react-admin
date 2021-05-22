import React from 'react';
import { ThroughProvider } from 'react-through'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth';
import { DrawerProvider } from './drawer';
import { MenuGroupProvider } from './menugroups';
import { SnacksProvider } from './snacks';
import { SnackbarProvider } from 'notistack';

function AppProviders({ children }) {
	return (
        <ThroughProvider>
            <BrowserRouter>
                <AuthProvider>
                    <DrawerProvider>
                        <MenuGroupProvider>
                            <SnackbarProvider maxSnack={10}>
                                <SnacksProvider>
                                    { children }
                                </SnacksProvider>
                            </SnackbarProvider>
                        </MenuGroupProvider>
                    </DrawerProvider>
                </AuthProvider>
            </BrowserRouter>
        </ThroughProvider>
	);
}

export default AppProviders;
