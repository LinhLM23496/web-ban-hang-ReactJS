import {
    takeLeading, takeLatest, takeEvery, // watcher event listener
    select, put, take, delay, all, call, spawn, fork // saga-Effects
} from 'redux-saga/effects';
import * as Actions from '../controller/ActionTypes';

export function* watcherProduct() {
    // yield takeLeading(Actions.UPDATE_CART_SAGA, workerUpdateCartSaga);
    yield takeLeading(Actions.THEM_VAO_MY_CART, workerThemVaoMyCart);
    yield takeLeading(Actions.XOA_CART_SAGA, workerXoaCartSaga);
    yield takeLeading(Actions.BTNDOWN_CART_SAGA, workerBtnDownCartSaga);
    yield takeLeading(Actions.BTNUP_CART_SAGA, workerBtnUpCartSaga);
    yield takeLeading(Actions.UPDATE_PURCHASE_SAGA, workerUpdatePurchaseSaga);
    yield takeLeading(Actions.DELETE_CART_PURCHASE_SAGA, workerDeletePurchaseSaga);
    yield takeLeading(Actions.ADD_PURCHASE_SAGA, workerAddPurchaseSaga);
}

// function* workerUpdateCartSaga(action) {
//     try {
//         yield put({
//             type: Actions.UPDATE_CART,
//             ttype: 'add_cart',
//             data: action.data
//         });
//     } catch(error) {}
// }

function* workerThemVaoMyCart(action) {
    const { data = {} } = action;
    const { id } = data.id;
    try {
        yield put({
            type: Actions.ADD_CART,
            ttype: 'add_cart',
            data: id
        });
    } catch(error) {}
}

function* workerXoaCartSaga(action) {
    try {
        // const cart = yield select(state => state.cartReducer);
        // const purchase = yield select(state => state.purchaseReducer);
        // console.log(purchase);
        yield put({
            type: Actions.XOA_CART,
            payload: action.payload
        });
    } catch(error) {}
}

function* workerBtnDownCartSaga(action) {
    try {
        yield put({
            type: Actions.BTNDOWN_CART,
            payload: action.payload
        });
    } catch(error) {}
}

function* workerBtnUpCartSaga(action) {
    try {
        yield put({
            type: Actions.BTNUP_CART,
            payload: action.payload
        });
    } catch(error) {}
}


function* workerUpdatePurchaseSaga(action) {
    try {
        const id = Math.floor(Math.random() * 101);
        let name = Math.random().toString(36).substring(2,7);
        yield put({
            type: Actions.UPDATE_PURCHASE,
            ttype: 'add_purchase',
            data: {
                ...action.data,
                id: id,
                name: name
            }
        });
        yield put({
            type: Actions.UPDATE_PURCHASE_LIST,
            ttype: 'add_purchase_list',
            data: {
                ...action.data,
                id: id
            }
        });
        yield put({
            type: Actions.DELETE_PURCHASE
        });
    } catch(error) {}
}

function* workerDeletePurchaseSaga(action) {
    try {
        yield put({
            type: Actions.UPDATE_PURCHASE_LIST,
            ttype: 'delelte_purchase_purchaselist',
            data: action.data
        });
        yield put({
            type: Actions.UPDATE_PURCHASE,
            ttype: 'delelte_purchase_purchaselist',
            data: action.data
        });
        // const id = Math.floor(Math.random() * 101);
        // let name = Math.random().toString(36).substring(2,7);
        // yield put({
        //     type: Actions.UPDATE_PURCHASE,
        //     ttype: 'add_purchase',
        //     data: {
        //         ...action.data,
        //         id: id,
        //         name: name
        //     }
        // });
    } catch(error) {}
}


function* workerAddPurchaseSaga(action) {
    try {
    //     const id = Math.floor(Math.random() * 101);
    //     let name = Math.random().toString(36).substring(2,7);
    //     yield put({
    //         type: Actions.UPDATE_PURCHASE,
    //         ttype: 'add_purchase',
    //         data: {
    //             ...action.data,
    //             id: id,
    //             name: name
    //         }
    //     });
    //     yield put({
    //         type: Actions.DELETE_PURCHASE
    //     });
    } catch(error) {}
}