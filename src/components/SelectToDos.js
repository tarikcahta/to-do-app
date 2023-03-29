import React from 'react';

const SelectToDos = ({ setCurrFilter }) => {
  const handleToDosFiltering = (e) => {
    setCurrFilter(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="m-10 mt-1 flex h-[3.1rem] w-4/5 flex-row  items-center justify-around rounded-2xl bg-neutral-vl-light-gray text-sm  ">
      <button value={'all'} onClick={handleToDosFiltering}>
        All
      </button>
      <button value={'notCompleted'} onClick={handleToDosFiltering}>
        Active
      </button>
      <button value={'completed'} onClick={handleToDosFiltering}>
        Completed
      </button>
    </div>
  );
};

export default SelectToDos;
