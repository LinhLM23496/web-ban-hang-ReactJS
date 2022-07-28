import { all } from 'redux-saga/effects';
import { watcherProduct } from '../controller/watcherProduct'

export default function* rootSaga() {
    yield all([
        watcherProduct()
    ])
};