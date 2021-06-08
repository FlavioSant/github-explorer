import styled from 'styled-components';

export const DashboardContainer = styled.div`
  & form {
    display: flex;
    margin-top: 4rem;
    max-width: 700px;

    & button {
      width: 15rem;
      height: 4rem;
      background: #04d361;
      border: 0;
      border-radius: 0 5px 5px 0;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: #00b852;
      }
    }
  }
`;

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  line-height: 56px;
  max-width: 450px;
  margin-top: 8rem;
`;

export const CardListContainer = styled.div`
  margin-top: 8rem;
  max-width: 700px;
`;
