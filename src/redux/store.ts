import { configureStore } from '@reduxjs/toolkit';
import formReducer from '@/redux/slices/formSlice';
import profileReducer from '@/redux/slices/profileSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    profile: profileReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
