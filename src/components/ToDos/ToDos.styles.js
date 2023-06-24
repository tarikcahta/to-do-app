import styled from 'styled-components';

export const ToDoWrapper = styled.div`
  min-height: 100%;
  width: 80%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ToDoList = styled.ul`
  width: 100%;
  border-radius: 0.3rem;
  overflow: hidden;

  @media (min-width: 768px) {
    border-radius: 0.3rem 0.3rem 0 0;
  }
`;

export const ToDoItem = styled.li`
  height: 3.1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.toDoBgColor};
  color: ${(props) => props.theme.filterToDosColor};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25rem;
`;
