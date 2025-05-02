import { createSlice} from '@reduxjs/toolkit';

const formData = {
  title: '',
  description: '',
  image: '',
  date: '',
  datetime: '',
  country: '',
  username: '',
  userPhoto: '',
};

const initialState = {
  isOpenForm: false,
  errors: {},
  formData,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    openForm: (state, { payload }) => {
      state.isOpenForm = true;
      if (payload) {
        state.formData = payload;
      }
    },
    closeForm: () => initialState,
    updateForm: (state, { payload }) => {
      state.formData = payload;
    },
  }
});

export const {
  openForm,
  closeForm,
  updateForm,
} = formSlice.actions;

export default formSlice.reducer;
