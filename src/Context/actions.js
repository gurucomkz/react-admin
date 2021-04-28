const ROOT_URL = 'http://hhh55.test/adminapi';

export async function request(subUrl, payload, method) {
	const requestOptions = {
		method: method || 'POST',
		headers: { 
			'Content-Type': 'application/json',
			'X-Requested-With': 'XMLHttpRequest',
		},
		body: JSON.stringify(payload),
	};

	let response = await fetch(`${ROOT_URL}/${subUrl}`, requestOptions);
	let data = await response.json();

	return data;
}

export async function loginUser(dispatch, loginPayload) {
	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		let data = await request('login', loginPayload)

		if (data.user) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			localStorage.setItem('currentUser', JSON.stringify(data));
			return data;
		}

		dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
		console.log(data.errors[0]);
		return;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}
