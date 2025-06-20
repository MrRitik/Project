import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
type FormState = {
  name: string;
  email: string;
  age: number;
};
const initialState: FormState = {
  name: '',
  email: '',
  age: 0,
};
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(_state, action: PayloadAction<FormState>) {
      return action.payload;
    },
  },
});
export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
