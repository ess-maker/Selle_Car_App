import { configureStore } from '@reduxjs/toolkit';
import fetchProductReducer from './fetchproduct';
import selectednumber from './selectednumber';
import shearchvalue  from './shearchvalue';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
  cars: fetchProductReducer,
  selectedNum:selectednumber,
  shearchvalue:shearchvalue
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;