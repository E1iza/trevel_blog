import { createSlice } from '@reduxjs/toolkit';

const formData = {
  title: '',
  description: '',
  image: '',
  date: '',
  datetime: '',
  country: '',
  nickname: '',
  userPhoto: '',
};

const initialState = {
  isOpenForm: false,
  formData,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    openForm: (state) => {
      state.isOpenForm = true;
    },
    closeForm: () => initialState,
    updateForm: (state, action) => {
      state.formData = action.payload;
    },
    // submitForm: (state, action) => {
    //   state.isSubmitted = true;
    //   state.formData = action.payload;
    // }
  }
});

export const {
  openForm,
  closeForm,
  updateForm,
  submitForm,
} = formSlice.actions;

export default formSlice.reducer;
