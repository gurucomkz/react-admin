
export const initialState = true;

export const DrawerReducer = (initialState, newValue) => {
	if('undefined' !== typeof newValue) {
		return newValue;
	}
	return initialState;
};
