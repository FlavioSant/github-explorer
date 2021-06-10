import styled from 'styled-components';

export const IssueCardContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: translateX(0.5rem);
  }

  & + div {
    margin-top: 1.5rem;
  }

  & a {
    display: flex;
    align-items: center;
    padding: 2.4rem;
    text-decoration: none;
    width: 100%;

    & div {
      flex: 1;
      margin-left: 1.6rem;

      & strong {
        color: ${({ theme }) => theme.colors.textPrimaryLight};
        font-size: 1.6rem;
      }

      & p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 1.2rem;
        margin-top: 0.4rem;
      }

      @media (max-width: 600px) {
        & strong {
          font-size: 1.4rem;
        }
      }
    }

    & svg {
      color: ${({ theme }) => theme.colors.textSecondaryLight};
    }
  }
`;
