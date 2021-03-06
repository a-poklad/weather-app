import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../store';
import { HomeComponent } from './Home';
import {getWeather, fetchList, deleteCity, addCity, setCity, getValue, fetchNewCity} from '../../store/weather';
import { DispatchProps, HomeProps, StateProps } from './Home.props';

const mapStateToProps = (state: AppState): StateProps => {
    return {
        weather: getWeather(state),
        value: getValue(state)
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    onFetchList: () => dispatch(fetchList()),
    onDeleteCity: (id: number) => dispatch(deleteCity(id)),
    onAddCity: (cityName: string) => dispatch(addCity(cityName)),
    onSetCity: (value: string) => dispatch(setCity(value)),
    onFetchNewCity: () => dispatch(fetchNewCity())
});

const ConnectedComponent = connect<StateProps, DispatchProps, HomeProps>(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { ConnectedComponent as Home };