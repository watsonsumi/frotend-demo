import {
	loginRequest,
	loginSuccess,
	loginFailure,
	clearMessage,
	loginLogout,
} from '../types/loginTypes';
import { axiosFetch } from '../../config/url/url';

const logRequest = () => {
	return {
		type: loginRequest,
	};
};
const logSuccess = email => {
	return {
		type: loginSuccess,
		payload: email,
	};
};
const logFailure = msg => {
	return {
		type: loginFailure,
		payload: msg,
	};
};
const clearMsg = () => {
	return {
		type: clearMessage,
	};
};
export const logout = () => {
	localStorage.clear();
	window.location.reload();
	return {
		type: loginLogout,
	};
};

export const login = (email, password) => async dispatch => {
	dispatch(logRequest());
	try {
		const { data } = await axiosFetch.post('/api/login', {
			email,
			password,
		});
		console.log(data);
		localStorage.setItem('user', JSON.stringify(data.data.nombre));
		localStorage.setItem('isAuthenticated', true);
		localStorage.setItem('data', JSON.stringify(data.data));

		dispatch(logSuccess(data));
	} catch (error) {
		dispatch(logFailure(error.response.data.msg));
		setTimeout(() => {
			dispatch(clearMsg());
		}, 3000);
	}
};
