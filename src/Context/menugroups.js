import React, { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router';
import { initialState, MenuGroupReducer } from './menugroups-reducer';
import MenuGroups from '../Config/MenuGroups';

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
    const location = useLocation();

    useEffect(()=>{
        const scanItemsOf = (g, menuKey) => {
            if(!g.items) return false;
            for(var gi1 in g.items) {
                const g1 = g.items[gi1];
                if (g1.path && g1.path.indexOf(location.pathname) === 0) {
                    dispatch(menuKey);
                    return true;
                }
                if(scanItemsOf(g1, menuKey)) {
                    return true;
                }
            }
            return false;
        }
        
        for(var menuKey in MenuGroups) {
            const grp = MenuGroups[menuKey];
            if(scanItemsOf(grp, menuKey)) break;
        }
    }, [location]);

	return (
		<MenuGroupStateContext.Provider value={user}>
			<MenuGroupDispatchContext.Provider value={dispatch}>
				{children}
			</MenuGroupDispatchContext.Provider>
		</MenuGroupStateContext.Provider>
	);
};
