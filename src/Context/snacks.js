import React, { useReducer } from 'react';
import { useSnackbar } from 'notistack';

const SnacksStateContext = React.createContext();
const SnacksDispatchContext = React.createContext();

export function useSnacksState() {
	const context = React.useContext(SnacksStateContext);
	if (context === undefined) {
		throw new Error('useSnacksState must be used within a SnacksProvider');
	}

	return context;
}

export function useSnacksDispatch() {
	const context = React.useContext(SnacksDispatchContext);
	if (context === undefined) {
		throw new Error('useSnacksDispatch must be used within a SnacksProvider');
	}

	return context;
}

const makeSnacksReducer = (enqueueSnackbar) => {
    return (_, error) => {
        const errVariant = { variant: 'error' };
        try{
            const errJson = JSON.parse(error);
            errJson.errors.forEach((errmsg) => enqueueSnackbar(errmsg[0], errVariant))
        } catch(_e){
            enqueueSnackbar(error, errVariant);
        }
        return null;
    }
};

export const SnacksProvider = ({ children }) => {
    const { enqueueSnackbar } = useSnackbar();
	const [list, dispatch] = useReducer(makeSnacksReducer(enqueueSnackbar), null);
	return (
        <SnacksStateContext.Provider value={list}>
            <SnacksDispatchContext.Provider value={dispatch}>
                {children}
            </SnacksDispatchContext.Provider>
        </SnacksStateContext.Provider> 
	);
};
