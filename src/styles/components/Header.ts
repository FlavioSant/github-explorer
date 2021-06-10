import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  & section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & div {
      display: flex;
      align-items: center;

      & h1 {
        margin-left: 0.675rem;
        color: ${({ theme }) => theme.colors.textSecondary};

        span {
          color: ${({ theme }) => theme.colors.textSecondaryLight};
        }
      }

      & svg {
        color: ${({ theme }) => theme.colors.textPrimary};
      }
    }

    & button {
      background: transparent;
      border: 0;
      font-size: 0;
      color: ${({ theme }) => theme.colors.textPrimary};

      &:hover {
        color: ${({ theme }) => theme.colors.textPrimaryLight};
      }
    }
  }

  & button[type='button'] {
    display: flex;
    align-items: center;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondaryLight};
    font-size: 1.1rem;
    margin-top: 1.275rem;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    & svg {
      margin-right: 0.3rem;
    }
  }
`;
