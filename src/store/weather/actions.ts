import { Forecast } from '../../models';
import { ACTION_TYPES } from './actionTypes';

export const setList = (list: Array<Forecast>) => ({
	type: ACTION_TYPES.SET_LIST,
	payload: list,
});

export const fetchList = () => ({
	type: ACTION_TYPES.FETCH_LIST,
});