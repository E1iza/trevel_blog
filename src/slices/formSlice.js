import { createSlice} from '@reduxjs/toolkit';

const formData = {
  title: '',
  description: '',
  image: { type: 'default', url: 'http://localhost:5173/src/assets/images/photos/img_default.png' },
  date: '',
  datetime: '',
  country: '',
  username: '',
  userPhoto: { type: 'default', url: 'http://localhost:5173/src/assets/images/users/author_default.jpg' },
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
