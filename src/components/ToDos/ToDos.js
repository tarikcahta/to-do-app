import React from 'react';
import ToDo from '../ToDo/ToDo';
import SelectToDos from '../SelectToDos/SelectToDos';
import { ToDoWrapper, ToDoList, ToDoItem } from './ToDos.styles';

const ToDos = ({ todos, setToDos, filteredToDos, setCurrFilter }) => {
  // console.log(todos);

  const toDosLeft = () => {
    if (filteredToDos.length === 0) {
      return 'No items left';
    } else {
      return `${filteredToDos.length} items left`;
    }
  };

  const clearCompletedToDos = () => {
    setToDos(filteredToDos.filter((toDo) => !toDo.completed));
    renderToDos();
  };

  const renderToDos = () => {
    return filteredToDos.map((todo) => (
      <ToDo
        todos={todos}
        filteredToDos={filteredToDos}
        setToDos={setToDos}
        key={todo.id}
        todo={todo}
        text={todo.text}
        id={todo.id}
      />
    ));
  };

  return (
    <ToDoWrapper>
      <ToDoList>
        {renderToDos()}
        <ToDoItem>
          <p>{toDosLeft()}</p>
          <button onClick={clearCompletedToDos}>Clear completed</button>
        </ToDoItem>
      </ToDoList>
      <SelectToDos setCurrFilter={setCurrFilter} />
    </ToDoWrapper>
  );
};

export default ToDos;
