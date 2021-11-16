import { all } from 'redux-saga/effects';
import {fetchdata} from '../login_regis/login_regisSaga'
export default function* rootSaga() {
    yield all([fetchdata()]);
}