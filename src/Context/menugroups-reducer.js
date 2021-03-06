import MenuGroups from '../Config/MenuGroups';

export const initialState = MenuGroups.MENU_MAIN;


export const MenuGroupReducer = (initialState, newValue) => {
	if (!MenuGroups[newValue]) {
		throw new Error(`Unknown menu group: ${newValue}`);
	}
	return MenuGroups[newValue];
};
