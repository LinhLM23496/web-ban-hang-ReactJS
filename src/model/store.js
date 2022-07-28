import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootWatcher from '../controller/watchers'

const persistConfig = {
    key: 'root',
    storage: storage,
    // blacklist: ['cartReducer']
};
const pReducer = persistReducer(persistConfig, rootReducer);

//tạo saga và apply middleware vào store
const saga = createSagaMiddleware(); 
const middleWares = [saga];

export const store = createStore(pReducer, applyMiddleware(...middleWares));

// chạy saga sau khi apply vào store
saga.run(rootWatcher);

export const persistor = persistStore(store);
