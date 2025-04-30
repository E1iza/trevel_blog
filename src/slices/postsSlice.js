import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const postsAdapter = createEntityAdapter();
const initialState = {
  ids: ['post1', 'post2', 'post3'],
  entities: {
    post1: {
      id: 1,
      title: 'Прага: город, где время течёт медленнее',
      href: '#post1',
      description:
        'Прага — это не просто столица Чехии, а место, где каждая улочка дышит историей. Здесь можно потеряться в лабиринте мостовых, найти самый вкусный трдельник и услышать, как бьются куранты на Староместской площади.',
      imageUrl:
        'https://images.unsplash.com/photo-1714584538307-950fd0cf3597?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Прага, Чехия', href: '#' },
      author: {
        name: 'WanderLustle',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    post2: {
      id: 2,
      title: 'Бали: рай не только для инстаграма',
      href: '#',
      description:
        'Бали — это не только белоснежные пляжи и лазурное море. Это остров, где можно найти уединение в джунглях, научиться серфингу и познакомиться с местной культурой.',
      imageUrl:
        'https://images.unsplash.com/photo-1591687814551-c41d42ec2ac6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'Jun 10, 2022',
      datetime: '2022-06-10',
      category: { title: 'Бали, Индонезия', href: '#' },
      author: {
        name: 'InForest',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    post3: {
      id: 3,
      title: 'Исландия: страна, где природа — главный художник',
      href: '#',
      description:
        'Исландия — это место, где земля дышит: гейзеры, водопады, чёрные пляжи и северное сияние. Это не страна, а волшебная сказка.',
      imageUrl:
        'https://images.unsplash.com/photo-1504985724362-dab7273d3caf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'Aug 24, 2022',
      datetime: '2022-08-24',
      category: { title: 'Исландия', href: '#' },
      author: {
        name: 'MonsoonMuse',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
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