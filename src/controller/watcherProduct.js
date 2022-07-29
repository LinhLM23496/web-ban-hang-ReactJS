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
    yield takeLeading(Actions.DELETE_PRODUCT_PURCHASE_DETAIL_SAGA, workerDelProdPurchaseDetailSaga);
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
    } catch(error) {}
}


function* workerDelProdPurchaseDetailSaga(action) {
    try {
        const id = action.data.id;
        const cartId = action.data.cartId;
        const products = yield select(state => state.productReducer);
        const purchases = yield select(state => state.purchaseReducer);
        const purchaseList = yield select(state => state.purchaseListReducer);
        let newProducts = purchaseList[cartId].products.filter(product => product.id !== id)
        let newTotalAll = totalAmountAll(newProducts, products, id)
        let cartUpdatePurchaseList =  {
            ...purchaseList[cartId],
            cartId: purchaseList[cartId].cartId,
            products: newProducts,
            total: newTotalAll.total,
            totalAmount: newTotalAll.totalAmount
        }
        const newPurchaseList = purchaseList.map((cart, index) => {
            if(index === cartId) {
                return cartUpdatePurchaseList;
            }
            return cart
        })
        const cartUpdatePurchase = {
            ...purchases[cartId],
            cartId: purchaseList[cartId].cartId,
            cartName: purchases[cartId].cartName,
            total: newTotalAll.total.toFixed(0),
            totalAmount: newTotalAll.totalAmount.toFixed(0),
            totalVax: newTotalAll.totalVax.toFixed(0)
        }
        const newPurchase = purchases.map((cart, index) => {
            if(index === cartId) {
                return cartUpdatePurchase;
            }
            return cart
        })
        yield put({
            type: Actions.UPDATE_PURCHASE_LIST,
            ttype: 'delete_product_purchase_detail',
            data: newPurchaseList
        })
        yield put({
            type: Actions.UPDATE_PURCHASE,
            ttype: 'delete_product_purchase_detail',
            data: newPurchase
        })
    } catch(error) {}
}

const findVaxInProduct = (products, id) => {
    let vax = 0;
    // let ProdId = cart
    products.map((product) => {
        if(product.id == id) {
            vax = product.vax;
        }
        return vax
    })
    return vax
}

const totalAmountAll = (carts, products, id) => {
    let totalAllCart = {
        total: 0,
        totalVax: 0,
        totalAmount: 0
    };
    if(carts.length > 0) {
        for(let i=0; i < carts.length; i++) {
            let vax = findVaxInProduct(products, carts[i].id)
            totalAllCart.total += carts[i].price * carts[i].quantity;
            totalAllCart.totalVax += carts[i].price * carts[i].quantity * vax;
            totalAllCart.totalAmount += carts[i].price * carts[i].quantity * (vax + 1);
        }
    }
    return totalAllCart;
}