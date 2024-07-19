import { RootStateType } from 'src/store/rootReducer.ts';

export const toggleThemeSelector = ({ themeReducer }: RootStateType) => themeReducer.theme;
