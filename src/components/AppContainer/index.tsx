import { NextPage } from 'next';

import Header from '../Header';

import { Container } from '../../styles/components/AppContainer';

interface AppContainerProps {
  toggleTheme: () => void;
}

const AppContainer: NextPage<AppContainerProps> = ({
  children,
  toggleTheme,
}) => {
  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      {children}
    </Container>
  );
};

export default AppContainer;
