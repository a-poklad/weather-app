import { Forecast } from '../../models';
import { ACTION_TYPES } from './actionTypes';

export const setList = (list: Array<Forecast>) => ({
	type: ACTION_TYPES.SET_LIST,
	payload: list
});

export const fetchList = () => ({
	type: ACTION_TYPES.FETCH_LIST,
});

export const deleteCity = (id: number) => ({
	type: ACTION_TYPES.DELETE_CITY,
	payload: id
});

export const setCity = (value: string) => ({
	type: ACTION_TYPES.SET_CITY,
	payload: value
});

export const getNewCity = (list: any) => ({
	type: ACTION_TYPES.GET_NEW_CITY,
	payload: list
});

export const getCityOne = (id: string) => ({
	type: ACTION_TYPES.GET_CITY_ONE,
	payload: id
});

export const fetchNewCity = () => ({
	type: ACTION_TYPES.FETCH_NEW_CITY,
});

export const addCity = (cityName: string) => ({
	type: ACTION_TYPES.ADD_CITY,
	payload: cityName
});


