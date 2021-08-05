// import {
//   combineReducers,
//   configureStore,
//   getDefaultMiddleware,
// } from "@reduxjs/toolkit";
// import { HYDRATE, createWrapper } from "next-redux-wrapper";
// import axios from "axios";
// import getConfig from "next/config";
// import RotationReducer, { rotationSlice } from './slice/rotationSlice';

// axios.defaults.baseURL = getConfig().publicRuntimeConfig.apiServerUrl;

// export const reducer = (state: any, action: any) => {
//   if (action.type === HYDRATE) {
//     return {
//       ...state,
//       ...action.payload,
//     };
//   }
//   return combineReducers({
//     /* */
// 		[rotationSlice.name]: RotationReducer,
//   })(state, action);
// };

// const makeStore = () =>
//   configureStore({
//     reducer,
//     middleware: [
//       ...getDefaultMiddleware({ thunk: true, serializableCheck: false }),
//     ],
//   });

// export const wrapper = createWrapper(makeStore, {
//   debug: process.env.NODE_ENV !== "production",
// });

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import CounterReducer from './slice/counter/counterSlice';
import RotationReducer from './slice/legueoflegned/rotationSlice';
import SummonerInfoReducer from './slice/legueoflegned/summonerInfoSlice';
import TierInfoReducer from './slice/legueoflegned/tierInfoSlice';

export const store = configureStore({
	reducer: {
		counter: CounterReducer,
		championRotation: RotationReducer,
		summonerInfo: SummonerInfoReducer,
		tierInfo: TierInfoReducer,
	},
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType, RootState, unknown, Action<string>>;