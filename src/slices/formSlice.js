import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenForm: false,
  isSubmitted: false,
  formData: {
    title: '',
    description: '',
    image: '',
    date: '',
    datetime: '',
    country: '',
    nickname: '',
    userPhoto: '',
  },
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    openForm: (state) => {
      state.isOpenForm = true;
    },
    closeForm: (state) => {
      state.isOpenForm = false;
    },
    resetForm: () => initialState,
  }
});

export const {
  openForm,
  closeForm,
  resetForm
} = formSlice.actions;

export default formSlice.reducer;
