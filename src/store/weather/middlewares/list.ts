import { Store } from 'redux';
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { ApiRequest } from '../../../apis/ApiRequest';
import {defaultCities} from '../../../apis/DefaultCities';
import { Forecast } from '../../../models';
import { setList } from '../actions';
import { subscribe } from '../../../utils/redux';
import {log} from "util";

const convertObjectForecastToArray = dailyForecastObj => {
	const dailyForecastArr = [];
	for (const date in dailyForecastObj) {
		dailyForecastArr.push({...dailyForecastObj[date], date })
	}
	return dailyForecastArr;
};

const fetchWorker = async (action: Action<undefined>, next, dispatch, getState) => {
	try {
		const state = getState();

		// const response = await ApiRequest.get(`forecast?id=${defaultCities[0].id}`);
		
		const response = defaultCities.map(async (item) => {
			const forecastItem = await ApiRequest.get(`forecast?id=${item.id}`);
			let newArr = [...state.weather.list, forecastItem];
			return newArr;
		});
		dispatch(setList(response));
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