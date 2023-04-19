import { AnyAction, CombinedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '@store/cart/slice';
import devicesReducer from '@store/devices/slice';
import userReducer from '@store/user/slice';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';

const combinedReducer = combineReducers({
    cart: cartReducer,
    devices: devicesReducer,
    user: userReducer,
});

const reducers = (state: ReturnType<typeof combinedReducer>, action: AnyAction): any => {
    if (action.type === HYDRATE) {
        return {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
    }

    return combinedReducer(state, action);
};

const makeConfStore = (reducer: CombinedState<typeof combinedReducer>) =>
    configureStore({
        reducer,
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });

const makeStore = () => {
    const isServer = typeof window === 'undefined';

    if (isServer) {
        return makeConfStore(reducers as CombinedState<typeof combinedReducer>);
    }
    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
    const { persistStore, persistReducer } = require('redux-persist');

    const persistConfig = {
        key: 'store',
        whitelist: ['cart', 'devices', 'user'],
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, reducers);
    const store = makeConfStore(persistedReducer);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    store._persistor = persistStore(store);

    return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
