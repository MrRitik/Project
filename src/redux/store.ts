import { configureStore } from '@reduxjs/toolkit';
import formReducer from '@/redux/Slices/formSlice';
import profileReducer from '@/redux/Slices/profileSlice';
import sidebarReducer from '@/redux/Slices/sidebarSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
