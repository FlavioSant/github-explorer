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

      strong {
        font-size: 2.4rem;
        color: #3d3d4d;
      }

      span {
        margin-top: 0.3rem;
        color: #6c6c80;
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
