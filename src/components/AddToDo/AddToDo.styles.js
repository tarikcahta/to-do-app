import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
  background-color: ${(props) => props.theme.toDoBgColor};
  border-radius: 0.3rem;
  width: 83%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CheckBox = styled.button`
  margin-left: 1.3rem;
  aspect-ratio: 1 / 1;
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid rgb(209 213 219);
  border-radius: 50%;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.toDoBgColor};
  height: 3rem;
  width: 87%;
  margin-left: 1rem;
  text-align: left;
  font-size: 0.8rem;
  color: ${(props) => props.theme.toDoColor};
  ${({ completed }) =>
    completed &&
    css`
      color: ${(props) => props.theme.filterToDosColor};
      font-weight: 400;
    `}

  outline: none;
  &:active,
  &:focus {
    outline: none;
  }
`;
