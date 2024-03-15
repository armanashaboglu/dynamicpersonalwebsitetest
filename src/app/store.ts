import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice';
import introductionReducer from '../features/introductionSlice';

export const store = configureStore({
  reducer: {
    introduction: introductionReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
