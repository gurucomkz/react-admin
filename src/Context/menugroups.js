import React, { useReducer } from 'react';
import { initialState, MenuGroupReducer } from './menugroups-reducer';

const MenuGroupStateContext = React.createContext();
const MenuGroupDispatchContext = React.createContext();

export function useMenuGroupState() {
	const context = React.useContext(MenuGroupStateContext);
	if (context === undefined) {
		throw new Error('useMenuGroupState must be used within a MenuGroupProvider');
	}

	return context;
}

export function useMenuGroupDispatch() {
	const context = React.useContext(MenuGroupDispatchContext);
	if (context === undefined) {
		throw new Error('useMenuGroupDispatch must be used within a MenuGroupProvider');
	}

	return context;
}

export const MenuGroupProvider = ({ children }) => {
	const [user, dispatch] = useReducer(MenuGroupReducer, initialState);

	return (
		<MenuGroupStateContext.Provider value={user}>
			<MenuGroupDispatchContext.Provider value={dispatch}>
				{children}
			</MenuGroupDispatchContext.Provider>
		</MenuGroupStateContext.Provider>
	);
};
