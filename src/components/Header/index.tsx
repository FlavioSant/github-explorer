import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FiChevronLeft, FiMoon, FiSun } from 'react-icons/fi';

import { ThemeContext } from 'styled-components';
import { HeaderContainer } from '../../styles/components/Header';

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: NextPage<HeaderProps> = ({ toggleTheme }) => {
  const router = useRouter();
  const { type } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <div>
        <img src="/logo.svg" alt="GitHub Explorer" title="GitHub Explorer" />
        <button onClick={toggleTheme}>
          {type === 'LIGHT' ? <FiMoon size={28} /> : <FiSun size={28} />}
        </button>
      </div>
      {router.pathname !== '/' && (
        <button type="button" title="Voltar" onClick={() => router.back()}>
          <FiChevronLeft size={16} />
          Voltar
        </button>
      )}
    </HeaderContainer>
  );
};

export default Header;
