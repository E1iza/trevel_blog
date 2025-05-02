import { createSlice} from '@reduxjs/toolkit';

const formData = {
  title: '',
  description: '',
  image: { type: 'default', url: new URL('../assets/images/photos/img_default.png', import.meta.url).href },
  date: '',
  datetime: '',
  country: '',
  username: '',
  userPhoto: { type: 'default', url: new URL('../assets/images/users/author_default.jpg', import.meta.url).href },
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
