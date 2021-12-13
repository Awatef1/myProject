import axios from 'axios';
import { GET_POST_SUCCESS, GET_POST_FAIL } from '../constant/actionType';

export const getPostsByFilter = arg => async dispatch => {
	try {
		const result = await axios.post('/api/search/search', arg);

		dispatch({
			type: GET_POST_SUCCESS,
			payload: result.data.response,
		});
	} catch (err) {
		console.dir(err);
		dispatch({ type: GET_POST_FAIL });
	
	}
};