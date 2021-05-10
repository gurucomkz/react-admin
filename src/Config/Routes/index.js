
import Login from '../../Pages/Login';
import Dashboard from '../../Pages/Dashboard';
import NotFound from '../../Pages/NotFound';
import adminRoutes from './admin';

const fallback = [
    {
		path: '/*',
		component: NotFound,
		isPrivate: true,
	}
];

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
]
.concat(adminRoutes)
.concat(fallback);

export default routes;
