import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const initialState = {
  isOpenForm: false,
  formData: null,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    openForm: (state, action) => {
      state.isOpenForm = true;
      state.formData = action.payload;
    },
    closeForm: (state, action) => {
      state.isOpenForm = false;
      state.formData = null;
    }
  }
});

export const { openForm, closeForm } = formSlice.actions;
export default formSlice.reducer;
