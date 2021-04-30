import React, { useReducer } from 'react';
import { initialState, DrawerReducer } from './drawer-reducer';

const DrawerStateContext = React.createContext();
const DrawerDispatchContext = React.createContext();

export function useDrawerState() {
	const context = React.useContext(DrawerStateContext);
	if (context === undefined) {
		throw new Error('useDrawerState must be used within a DrawerProvider');
	}

	return context;
}

export function useDrawerDispatch() {
	const context = React.useContext(DrawerDispatchContext);
	if (context === undefined) {
		throw new Error('useDrawerDispatch must be used within a DrawerProvider');
	}

	return context;
}

export const DrawerProvider = ({ children }) => {
	const [open, dispatch] = useReducer(DrawerReducer, initialState);

	return (
		<DrawerStateContext.Provider value={open}>
			<DrawerDispatchContext.Provider value={dispatch}>
				{children}
			</DrawerDispatchContext.Provider>
		</DrawerStateContext.Provider>
	);
};
