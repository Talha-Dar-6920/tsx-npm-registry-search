import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import Reducers from './reducers';

export const store = configureStore({
  reducer: {
    fetchPackages: Reducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
