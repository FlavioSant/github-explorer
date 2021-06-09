import styled, { css } from 'styled-components';

interface InputContainerProps {
  hasError: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  flex: 1;

  & input {
    border: 0;
    border: 2px solid #fff;
    border-radius: 5px 0 0 5px;
    border-right: 0;
    color: #3a3a3a;
    height: 4rem;
    padding: 0 2.4rem;
    width: 100%;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }

    &:focus {
      border-color: #a8a8b3;
    }
  }

  & span {
    display: block;
    color: #c53030;
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    & input {
      border-radius: 5px;
    }
  }
`;
