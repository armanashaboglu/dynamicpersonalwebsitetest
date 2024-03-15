import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface Post {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

let prevId = 0; // uuid for posts

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.posts.push(action.payload);
      },
      prepare: ({ title, description, image }: Omit<Post, 'id'>) => {
        const id = String(++prevId);
        return {
            payload: {
            id,
            title,
            description,
            image,
            },
        };
        },
      },
    // deleting post
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    // updating post
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
  },
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
