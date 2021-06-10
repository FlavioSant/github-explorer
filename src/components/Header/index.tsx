import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FiChevronLeft, FiMoon, FiSun } from 'react-icons/fi';
import { MdExplore } from 'react-icons/md';

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
      <section>
        <div title="GitHub Explorer">
          <MdExplore size={40} />
          <h1>
            github<span>_explorer</span>
          </h1>
        </div>
        <button onClick={toggleTheme} title="Mudar Tema">
          {type === 'LIGHT' ? <FiMoon size={28} /> : <FiSun size={28} />}
        </button>
      </section>
      {router.pathname !== '/' && (
        <button type="button" title="Voltar" onClick={() => router.back()}>
          <FiChevronLeft size={20} />
          Voltar
        </button>
      )}
    </HeaderContainer>
  );
};

export default Header;
