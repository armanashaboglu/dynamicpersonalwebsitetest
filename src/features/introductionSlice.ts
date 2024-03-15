import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface IntroductionState {
  introText: string;
  imageUrl: string;
}

const initialState: IntroductionState = {
  introText: "Hey this is me!",
  imageUrl: "",
};

export const introductionSlice = createSlice({
  name: 'introduction',
  initialState,
  reducers: {
    setIntroText: (state, action: PayloadAction<string>) => {
      state.introText = action.payload;
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setIntroText, setImageUrl } = introductionSlice.actions;

export const selectIntroduction = (state: RootState) => state.introduction;

export default introductionSlice.reducer;
