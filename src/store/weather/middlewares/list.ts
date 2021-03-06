// import { Store } from 'redux';
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { ApiRequest } from '../../../apis/ApiRequest';
import {defaultCities} from '../../../apis/DefaultCities';
import { Forecast } from '../../../models';
import { setList } from '../actions';
import { subscribe } from '../../../utils/redux';

const fetchWorker = async (action: Action<undefined>, next, dispatch, getState) => {

	try {

		let newArr = [];

		let response = 'group?id=';
		defaultCities.map((item) => {
			return response = response + item.id + ',';
		});
		const responseAll = response.replace(/,$/, "");
		const forecastItem = await ApiRequest.get<Array<Forecast>>(responseAll);
		newArr.push(forecastItem);

		dispatch(setList(newArr));

	} catch (e) {
		throw e;
	}
	next(action);
};


const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
	ACTION_TYPES.FETCH_LIST,
	fetchWorker
)(next, dispatch, getState);


export const fetchMiddlewares = [ fetchMiddleware ];