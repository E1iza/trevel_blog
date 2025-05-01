import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const postsAdapter = createEntityAdapter();
const initialState = {
  ids: ['post1', 'post2', 'post3'],
  entities: {
    post1: {
      id: 1,
      title: 'Прага: город, где время течёт медленнее',
      description:
        'Прага — это не просто столица Чехии, а место, где каждая улочка дышит историей. Здесь можно потеряться в лабиринте мостовых, найти самый вкусный трдельник и услышать, как бьются куранты на Староместской площади.',
      image:
        'http://localhost:5173/src/assets/images/photos/post1.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      country: 'Прага, Чехия',
      nickname: 'WanderLustle',
      userPhoto:
        'http://localhost:5173/src/assets/images/users/author1.jpg',
    },
    post2: {
      id: 2,
      title: 'Бали: рай не только для инстаграма',
      description:
        'Бали — это не только белоснежные пляжи и лазурное море. Это остров, где можно найти уединение в джунглях, научиться серфингу и познакомиться с местной культурой.',
      image:
        'http://localhost:5173/src/assets/images/photos/post2.jpg',
      date: 'Jun 10, 2022',
      datetime: '2022-06-10',
      country: 'Бали, Индонезия',
      nickname: 'InForest',
      userPhoto:
        'http://localhost:5173/src/assets/images/users/author2.jpg',
    },
    post3: {
      id: 3,
      title: 'Исландия: страна, где природа — главный художник',
      description:
        'Исландия — это место, где земля дышит: гейзеры, водопады, чёрные пляжи и северное сияние. Это не страна, а волшебная сказка.',
      image:
        'http://localhost:5173/src/assets/images/photos/post3.jpg',
      date: 'Aug 24, 2022',
      datetime: '2022-08-24',
      country: 'Исландия',
      nickname: 'MonsoonMuse',
      userPhoto:
        'http://localhost:5173/src/assets/images/users/author3.jpg',
    },
  }
};

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
