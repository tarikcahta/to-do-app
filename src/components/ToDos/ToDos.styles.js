import styled from 'styled-components';

export const ToDoWrapper = styled.div`
  min-height: 100%;
  width: 80%;
`;

export const ToDoList = styled.ul`
  width: 100%;
`;

export const ToDoItem = styled.li`
  margin-top: 0.25rem;
  height: 3.1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  background-color: hsl(0, 0%, 98%);
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
