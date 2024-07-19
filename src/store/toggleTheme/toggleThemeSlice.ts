import { createSlice } from '@reduxjs/toolkit';
import { ThemeStateType } from 'src/types/theme.ts';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: ThemeStateType = {
  theme: localStorage.getItem('theme') || 'light',
};

export const toggleThemeSlice = createSlice({
  name: 'toggleTheme',
  initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { switchTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;
