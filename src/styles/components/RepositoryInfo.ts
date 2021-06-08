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
  }
`;
