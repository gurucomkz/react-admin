
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Accounts from '../Pages/Accounts';
import NotFound from '../Pages/NotFound';

const routes = [
	{
		path: '/login',
		component: Login,
		isPrivate: false,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		isPrivate: true,
	},
	{
		path: '/accounts',
		component: Accounts,
		isPrivate: true,
	},
	{
		path: '/*',
		component: NotFound,
		isPrivate: true,
	},
];

export default routes;
