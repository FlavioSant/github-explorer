import styled from 'styled-components';

export const RepositoryInfoContainer = styled.section`
  margin-top: 8rem;

  & header {
    display: flex;
    align-items: center;

    & img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    & section {
      margin-left: 1.7rem;

      & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      & span {
        color: #737380;
        font-size: 0.975rem;
      }

      & strong {
        font-size: 2.375rem;
        color: #3d3d4d;
      }

      & p {
        font-size: 1.2rem;
        color: #737380;
        margin-top: 0.3rem;
      }
    }

    @media (max-width: 600px) {
      & img {
        width: 100px;
        height: 100px;
      }

      & section {
        margin-left: 0.6rem;

        & div {
          flex-direction: column;
          align-items: flex-start;
        }

        & strong {
          font-size: 2rem;
        }

        & p {
          font-size: 1.1rem;
          margin-top: 0.8rem;
        }
      }
    }
  }
`;
