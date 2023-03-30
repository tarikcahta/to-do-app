import React from 'react';
import { StyledFilterButtons, StyledFilterButton } from './SelectToDos.styles';

const SelectToDos = ({ setCurrFilter }) => {
  const handleToDosFiltering = (e) => {
    setCurrFilter(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <StyledFilterButtons>
      <StyledFilterButton value={'all'} onClick={handleToDosFiltering}>
        All
      </StyledFilterButton>
      <StyledFilterButton value={'notCompleted'} onClick={handleToDosFiltering}>
        Active
      </StyledFilterButton>
      <StyledFilterButton value={'completed'} onClick={handleToDosFiltering}>
        Completed
      </StyledFilterButton>
    </StyledFilterButtons>
  );
};

export default SelectToDos;
