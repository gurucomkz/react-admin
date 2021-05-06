const ROOT_URL = 'http://hhh55.test/adminapi';

export function request(subUrl, payload, method, plainResult) {
	let token = localStorage.getItem('currentUser')
		? JSON.parse(localStorage.getItem('currentUser')).auth_token
		: '';
		
	var requestOptions = {
		method: method || 'POST',
		headers: { 
			'Content-Type': 'application/json',
			'X-Requested-With': 'XMLHttpRequest',
			'Authorization': 'Bearer ' + token,
		},
	};

	if (payload) {
		if (method === 'GET') {
			subUrl += '?' + new URLSearchParams(payload).toString();
		} else {
			requestOptions.body = JSON.stringify(payload);
		}
	}
	return fetch(`${ROOT_URL}/${subUrl}`, requestOptions)
		.then(async (response) => {
			if(!response.ok) {
				const txt = await response.text();
				const err = txt ? txt.substr(0,100) : response.statusText;
				return Promise.reject(err);
			}
			return response;
		})
		.then((response) => plainResult ? response.text() : response.json());
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
