import styled, { css } from 'styled-components';

interface InputContainerProps {
  hasError: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  flex: 1;

  & input {
    border: 0;
    border: 2px solid #ddd;
    border-radius: 5px 0 0 5px;
    border-right: 0;
    color: var(--text-primary);
    height: 4rem;
    padding: 0 2.4rem;
    width: 100%;

    ${props =>
      props.hasError &&
      css`
        border-color: var(--red);
      `}

    &::placeholder {
      color: var(--text-secondary-light);
    }

    &:focus {
      border-color: var(--text-secondary-light);
    }
  }

  & span {
    display: block;
    color: var(--red);
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    & input {
      border-radius: 5px;
      border: 2px solid #ddd;
    }
  }
`;
