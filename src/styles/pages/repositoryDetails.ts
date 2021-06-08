import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    display: flex;
    align-items: center;
    border: 0;
    background: transparent;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 0.3rem;
  }
`;

export const IssueListContainer = styled.main`
  margin-top: 8rem;

  & h1 {
    color: #3d3d4d;
    text-align: center;
  }

  & hr {
    background: #ccc;
    border: none;
    height: 1px;
    margin: 0.5rem 0 2.5rem 0;
    width: 100%;
  }
`;
