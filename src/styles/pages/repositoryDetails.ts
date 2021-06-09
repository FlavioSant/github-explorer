import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    display: flex;
    align-items: center;
    border: 0;
    background: transparent;
    color: var(--text-secondary-light);
    transition: color 0.2s;

    &:hover {
      color: var(--text-primary);
    }
  }

  svg {
    margin-right: 0.3rem;
  }
`;

export const IssueListContainer = styled.main`
  margin-top: 8rem;

  & h1 {
    color: var(--text-primary-light);
    text-align: center;
  }

  & hr {
    background: var(--text-secondary-light);
    border: none;
    height: 1px;
    margin: 0.5rem 0 2.5rem 0;
    width: 100%;
  }

  @media (max-width: 600px) {
    margin-top: 5rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  & a + a {
    margin-left: 1rem;
  }

  & a {
    display: flex;
    align-items: center;
    align-self: flex-end;
    background: var(--green);
    border-radius: 5px;
    color: var(--white);
    font-weight: bold;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: background 0.2s;

    &.buttonBlue {
      background: var(--blue);
    }

    &.buttonBlue:hover {
      background: var(--blue-dark);
    }

    svg {
      margin-left: 0.375rem;
    }

    &:hover {
      background: var(--green-dark);
    }
  }
`;
