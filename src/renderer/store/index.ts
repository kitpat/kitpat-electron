import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import userReducer from 'renderer/store/reducers/userReducer';

const reducers = combineReducers({
    user: userReducer,
});

const persistConfig = {
    key: 'kitpat',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['user'] // 设置某个reducer数据持久化
};

const myPersistReducer = persistReducer<any>(persistConfig, reducers);

const store = configureStore({
    reducer: myPersistReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

// 从store自身引出`RootState`和`AppDispatch`类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;