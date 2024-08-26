import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeSelector } from 'src/store/toggleTheme/toggleThemeSelector.ts';
import { switchTheme } from 'src/store/toggleTheme/toggleThemeSlice.ts';

import { IconMoon } from '../../assets/desktop/icons/IconMoon';
import { IconSun } from '../../assets/desktop/icons/IconSun';

import './toggleTheme.css';

export const ToggleTheme: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(toggleThemeSelector);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(switchTheme(newTheme));
  };

  return (
    <div className="toggle-wrapper">
      <IconSun />
      <div className="switch">
        <input
          id="switch"
          className="switch__input"
          name="switch"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <label className="switch__label" htmlFor="switch" />
      </div>
      <IconMoon />
    </div>
  );
};
