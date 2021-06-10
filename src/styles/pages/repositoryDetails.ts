import styled from 'styled-components';

export const IssueListContainer = styled.main`
  margin-top: 8rem;

  & h1 {
    color: ${({ theme }) => theme.colors.textPrimaryLight};
    text-align: center;
  }

  & hr {
    background: ${({ theme }) => theme.colors.textSecondaryLight};
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
    background: ${({ theme }) => theme.colors.green};
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: background 0.2s;

    &.buttonBlue {
      background: ${({ theme }) => theme.colors.blue};
    }

    &.buttonBlue:hover {
      background: ${({ theme }) => theme.colors.blueDark};
    }

    svg {
      margin-left: 0.375rem;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.greenDark};
    }
  }
`;
