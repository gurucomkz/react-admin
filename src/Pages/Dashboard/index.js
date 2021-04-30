import React from 'react';
import { logout, useAuth } from '../../Context';
import styles from './dashboard.module.css';

function Dashboard(props) {
	const [userDetails, dispatch] = useAuth();

	const handleLogout = () => {
		logout(dispatch);
		props.history.push('/login');
	};
	return (
		<div style={{ padding: 10 }}>
			<div className={styles.dashboardPage}>
				<h1>Dashboard</h1>
				<button className={styles.logoutBtn} onClick={handleLogout}>
					Logout
				</button>
			</div>
			<p>Welcome {userDetails.user.email}</p>
		</div>
	);
}

export default Dashboard;
