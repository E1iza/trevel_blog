import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const postsAdapter = createEntityAdapter();
const posts = {
  ids: ['dfp_1', 'dfp_2', 'dfp_3'],
  entities: {
    dfp_1: {
      id: 'dfp_1',
      title: 'Прага: город, где время течёт медленнее',
      description:
        'Прага — это не просто столица Чехии, а место, где каждая улочка дышит историей. Здесь можно потеряться в лабиринте мостовых, найти самый вкусный трдельник и услышать, как бьются куранты на Староместской площади.',
      image:
        { type: 'img', url: new URL('../assets/images/photos/post1.jpg', import.meta.url).href },
      date: 'Mar 16, 2020, 2:30',
      datetime: '2020-03-16',
      country: 'Прага, Чехия',
      username: 'WanderLustle',
      userPhoto:
        { type: 'img', url: new URL('../assets/images/users/author1.jpg', import.meta.url).href },
    },
    dfp_2: {
      id: 'dfp_2',
      title: 'Бали: рай не только для инстаграма',
      description:
        'Бали — это не только белоснежные пляжи и лазурное море. Это остров, где можно найти уединение в джунглях, научиться серфингу и познакомиться с местной культурой.',
      image:
        { type: 'img', url: new URL('../assets/images/photos/post2.jpg', import.meta.url).href },
      date: 'Jun 10, 2022, 1:12',
      datetime: '2022-06-10',
      country: 'Бали, Индонезия',
      username: 'InForest',
      userPhoto:
        { type: 'img', url: new URL('../assets/images/users/author2.jpg', import.meta.url).href },
    },
    dfp_3: {
      id: 'dfp_3',
      title: 'Исландия: природа — главный художник',
      description:
        'Исландия — это место, где земля дышит: гейзеры, водопады, чёрные пляжи и северное сияние. Это не страна, а волшебная сказка.',
      image:
        { type: 'img', url: new URL('../assets/images/photos/post3.jpg', import.meta.url).href },
      date: 'Aug 24, 2022, 00:45',
      datetime: '2022-08-24',
      country: 'Исландия',
      username: 'MonsoonMuse',
      userPhoto:
        { type: 'img', url: new URL('../assets/images/users/author3.jpg', import.meta.url).href },
    },
  }
};
const initialState = postsAdapter.getInitialState(posts);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: postsAdapter.addOne,
    updatePost: postsAdapter.updateOne,
    removePost: postsAdapter.removeOne,
  }
});

export const { actions } = postsSlice;
export const selectors = postsAdapter.getSelectors((state) => state.posts);

export default postsSlice.reducer;
