import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

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
    margin-top: 1rem;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    & svg {
      margin-right: 0.3rem;
    }
  }
`;
