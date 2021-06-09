import styled from 'styled-components';

export const RepositoryInfoContainer = styled.section`
  margin-top: 8rem;

  & header {
    display: flex;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }

      span {
        background: var(--red);
        border-radius: 3px;
        color: var(--white);
        font-size: 0.975rem;
        font-weight: bold;
        margin-top: 1rem;
        padding: 0.1rem 0.5rem;
      }
    }

    & section {
      margin-left: 1.7rem;

      & div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      & span {
        color: var(--text-secondary);
        font-size: 0.975rem;
      }

      & strong {
        font-size: 2.375rem;
        color: var(--text-primary);
      }

      & p {
        font-size: 1.2rem;
        color: var(--text-secondary);
        margin-top: 0.8rem;
      }
    }

    @media (max-width: 600px) {
      & div {
        img {
          width: 100px;
          height: 100px;
        }
      }

      & section {
        margin-left: 0.6rem;

        & strong {
          font-size: 2rem;
        }

        & p {
          font-size: 1.1rem;
        }
      }
    }
  }
`;
