import createSagaMiddleware from "@redux-saga/core";
import { configureStore, combineReducers, applyMiddleware, getDefaultMiddleware } from "@reduxjs/toolkit";
import order from "./slices/orderSlice";
import rootSaga from "./sagas/rootSaga";

const rootReducer = combineReducers({ order: order });
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
export const store = configureStore({ reducer: rootReducer, middleware });
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
