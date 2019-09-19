import { PATHES } from './App.pathes';
import { Redirect, RouteComponentProps } from 'react-router';
import { Home } from '../Home';
import * as React from 'react';
import { NotFound } from '../NotFound';


export interface AppRoute {
	path: PATHES;
	render: (params: RouteComponentProps) => any;
	exact?: boolean;
	isProtected?: boolean;
}

export default [
	{
		path: PATHES.HOME,
		render: (props: RouteComponentProps) => <Home { ...props }/>,
		exact: true,
		isProtected: true
	},
	{
		path: PATHES.NOT_FOUND,
		render: (props: RouteComponentProps) => <NotFound { ...props }/>
	},
	{
		path: PATHES.REDIRECT,
		render: () => <Redirect to={ '/404' }/>
	}
];