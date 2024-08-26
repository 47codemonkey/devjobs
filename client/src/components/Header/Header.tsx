import React from 'react';
import { BgHeader } from '../../assets/desktop/icons/BgHeader';
import { IconLogo } from '../../assets/desktop/icons/IconLogo';
import { ToggleTheme } from '../../components/ToggleTheme/ToggleTheme';

import './header.css';

export const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <IconLogo className="header-logo" />
      <BgHeader className="header-background" />
      <ToggleTheme />
    </header>
  );
};
