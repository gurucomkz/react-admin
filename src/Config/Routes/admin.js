import { 
    Properties, 
    Accounts, 
    Users 
} from "../../Pages/Admin/Dictionaries";


const adminRoutes = [
    {
		path: '/accounts',
		component: Accounts,
		isPrivate: true,
	},
    {
		path: '/properties',
		component: Properties,
		isPrivate: true,
	},
    {
		path: '/users',
		component: Users,
		isPrivate: true,
	},
];

export default adminRoutes;
