import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import basketReducer from './features/basketSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, basketReducer)

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        basket: persistedReducer,
    }
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
