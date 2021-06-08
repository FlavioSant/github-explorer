import styled from 'styled-components';

export const RepositoryCountsContainer = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin-top: 2.575rem;

    li {
      & + li {
        margin-left: 5rem;
      }

      strong {
        display: block;
        font-size: 2.4rem;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 0.3rem;
        color: #6c6c80;
      }
    }
  }
`;
