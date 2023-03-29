import React from 'react';
import ToDo from './ToDo';

const ToDos = ({ todos, setToDos, filteredToDos }) => {
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
        setToDos={setToDos}
        key={todo.id}
        todo={todo}
        text={todo.text}
        id={todo.id}
      />
    ));
  };

  return (
    <div className="-mt-5 h-fit w-4/5">
      {renderToDos()}
      <li className="mt-1 flex h-[3.1rem] w-full flex-row items-center justify-around rounded-2xl bg-neutral-vl-light-gray text-sm ">
        <p>{toDosLeft()}</p>

        <button onClick={clearCompletedToDos}>Clear completed</button>
      </li>
    </div>
  );
};

export default ToDos;
