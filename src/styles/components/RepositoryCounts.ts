import styled from 'styled-components';

export const RepositoryCountsContainer = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin-top: 2.575rem;

    li {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      & + li {
        margin-left: 5rem;
      }

      svg {
        margin-right: 0.3rem;
      }

      strong {
        display: flex;
        align-items: center;
        font-size: 2.4rem;
        color: var(--text-primary-light);
      }

      span {
        margin-top: 0.3rem;
        color: var(--text-secondary);
      }
    }

    @media (max-width: 600px) {
      & li {
        & + li {
          margin-left: 2.75rem;
        }

        & strong {
          font-size: 2.2rem;
        }
      }
    }
  }
`;
