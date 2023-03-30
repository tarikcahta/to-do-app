import styled, { css } from 'styled-components';

export const ToDoItem = styled.li`
  position: relative;
  margin-top: 0.25rem;
  display: flex;
  height: 3.1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: hsl(0, 0%, 98%);
`;

export const ToDoButton = styled.button`
  position: absolute;
  left: 8%;
  top: 24%;
  aspect-ratio: 1 / 1;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid rgb(209 213 219);
`;

export const ToDoText = styled.p`
  margin-left: 25%;
  margin-right: 15%;
  flex: 1;
  font-size: 0.9rem;
  color: hsl(235, 19%, 35%);
  ${({ completed }) =>
    completed &&
    css`
      text-decoration: line-through;
    `}
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 7%;
  top: 24%;
  width: 1.5rem;
  height: 1.5rem;
`;