import styled from 'styled-components';

export const FilterButtons = styled.div`
  /* margin-top: 0.25rem; */
  display: flex;
  height: 2.7rem;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0 0 0.2rem 0.25rem;
  color: ${(props) => props.theme.filterToDosColor};
  background-color: ${(props) => props.theme.toDoBgColor};
  font-size: 0.875rem /* 14px */;
  font-weight: 900;
  line-height: 1.25rem /* 20px */;
`;

export const FilterButton = styled.button`
  font-size: 0.65rem;
  margin: 0 3.2rem 0;
  border: none;
  outline: none;
  cursor: pointer;

  &:active,
  &:focus {
    color: hsl(220, 98%, 61%);
  }

  &:hover {
    color: ${(props) => props.theme.toDoColor};
  }
`;

export const ToDoItem = styled.li`
  margin-top: 0.25rem;
  height: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.toDoBgColor};
  color: ${(props) => props.theme.filterToDosColor};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25rem;

  &:hover {
    color: ${(props) => props.theme.toDoColor};
  }
`;
