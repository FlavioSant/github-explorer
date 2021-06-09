import styled from 'styled-components';

export const RepositoryCardContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 2.4rem;
  transition: transform 0.2s;
  width: 100%;

  &:hover {
    transform: translateX(0.5rem);
  }

  & + div {
    margin-top: 1rem;
  }

  & img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  & div {
    margin-left: 1.6rem;
    flex: 1;

    & strong {
      font-size: 1.6rem;
      color: #3d3d4d;
    }

    & p {
      font-size: 1.2rem;
      color: #a8a8b3;
      margin-top: 0.4rem;
    }

    @media (max-width: 600px) {
      & strong {
        font-size: 1.475rem;
      }
    }
  }
`;
