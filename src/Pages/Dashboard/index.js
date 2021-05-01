import { Badge, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { request } from '../../Context/actions';

function Dashboard(props) {
	const history = useHistory();
	// eslint-disable-next-line
	const [error, setError] = useState(null);
	// eslint-disable-next-line
	const [isLoaded, setIsLoaded] = useState(false);
	const [widgets, setWidgets] = useState([]);

	const loadWidgets = () => {
		request('dashboard/widgets', null, 'GET')
		  .then(
			(result) => {
				setIsLoaded(true);
				setWidgets(result);
			},
			(error) => {
				setIsLoaded(true);
				setWidgets([]);
				setError(error);
			}
		  )
	};
	
	useEffect(loadWidgets, []);
	const renderWidgets = () => {
		const widgetClick = (w) => {
			if(w.url){
				const path = w.url.replace(/\/admin\//,'/');
				history.push(path);
			}
		}
		if(!widgets || !widgets.length) {
			return null;
		}
		return (
			<Grid container spacing={3}>
				{widgets.map((w) => {
					const comments = 'string' === typeof w.comment ? [w.comment] : w.comment;

					return (
						<Grid item xs={2 * w.size}>
							<Card button onClick={()=>widgetClick(w)}>
								<CardContent>
									<Badge badgeContent={w.counter} color="secondary" valiant="h3" invisible={!w.counter}>
										<Typography color="textPrimary" gutterBottom>
											{w.title}
										</Typography>
									</Badge>
									
									{comments.map((text) =>(
										<Typography color="textSecondary" valiant="subtitle2" gutterBottom>
											{text}	
										</Typography>
									))}
								</CardContent>
							</Card>
						</Grid>
					)}
				)}
			</Grid>
		);
	}
	return (
		<div style={{flexGrow: 1}}>
			<Grid
				direction="row"
				justify="center"
				alignItems="center"
				spacing={0}
				>
				<h1>Dashboard</h1>
				<div>
					{renderWidgets()}
				</div>
			</Grid>
		</div>
	);
}

export default Dashboard;
