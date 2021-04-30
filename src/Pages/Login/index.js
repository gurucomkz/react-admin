import { Avatar, Button, Container, CssBaseline, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { loginUser, useAuth } from '../../Context';

const useStyles = makeStyles((theme) => ({
	paper: {
	  marginTop: theme.spacing(8),
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	},
	avatar: {
	  margin: theme.spacing(1),
	  backgroundColor: theme.palette.secondary.main,
	},
	form: {
	  width: '100%', // Fix IE 11 issue.
	  marginTop: theme.spacing(1),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	},
  }));

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const classes = useStyles();

	const [userState, dispatch] = useAuth();
	const { loading, errorMessage } = userState;

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			let response = await loginUser(dispatch, { email, password });
			if (!response.user) return;
			props.history.push('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={loading}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						disabled={loading}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleLogin} 
						disabled={loading}
					>
						Sign In
					</Button>
				
				</form>
			</div>
		</Container>
	);
}

export default Login;
