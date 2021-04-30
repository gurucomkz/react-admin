import { loginUser, logout } from './actions';
import { AuthProvider, useAuthDispatch, useAuthState } from './auth';
import { DrawerProvider, useDrawerDispatch, useDrawerState } from './drawer';
import AppProviders from './providers';

const useAuth = () => [ useAuthState(), useAuthDispatch() ];
export { AuthProvider, useAuth, loginUser, logout };

const useDrawer = () => [ useDrawerState(), useDrawerDispatch() ];
export { DrawerProvider, useDrawer };

export { AppProviders };
