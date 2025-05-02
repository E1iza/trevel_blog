import { createSlice} from '@reduxjs/toolkit';
import {useSelector} from "react-redux";
import { selectors } from './postsSlice.js';

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
  postId: null,
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
    updateForm: (state, action) => {
      state.formData = action.payload;
    },
  }
});

export const {
  openForm,
  closeForm,
  updateForm,
} = formSlice.actions;

export default formSlice.reducer;
