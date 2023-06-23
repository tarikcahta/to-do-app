import React from 'react';
import { FilterButtons, FilterButton, ToDoItem } from './ToDosActionBar.styles';

const ToDosActionBar = ({ toDosLeft, clearCompletedToDos, setCurrFilter }) => {
  const handleToDosFiltering = (e) => {
    setCurrFilter(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <FilterButtons>
      <ToDoItem>
        <p>{toDosLeft()}</p>
      </ToDoItem>
      <FilterButton value={'all'} onClick={handleToDosFiltering}>
        All
      </FilterButton>
      <FilterButton value={'notCompleted'} onClick={handleToDosFiltering}>
        Active
      </FilterButton>
      <FilterButton value={'completed'} onClick={handleToDosFiltering}>
        Completed
      </FilterButton>
      <ToDoItem>
        <button onClick={clearCompletedToDos}>Clear Completed</button>
      </ToDoItem>
    </FilterButtons>
  );
};

export default ToDosActionBar;
