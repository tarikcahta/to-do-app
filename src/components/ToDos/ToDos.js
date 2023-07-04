import ToDo from '../ToDo/ToDo';
import SelectToDos from '../SelectToDos/SelectToDos';
import { ToDoWrapper, ToDoList, ToDoItem, ItemsLeft } from './ToDos.styles';
import ToDosActionBar from '../ToDosActionBar/ToDosActionBar';
import { useState, useEffect } from 'react';

const ToDos = ({
  todos,
  setToDos,
  filteredToDos,
  setCurrFilter,
  clicked,
  setClicked,
}) => {
  // console.log(todos);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toDosLeft = () => {
    if (filteredToDos.length === 0) {
      return 'No items left';
    } else if (filteredToDos.length === 1) {
      return `${filteredToDos.length} item left`;
    } else {
      return `${filteredToDos.length} items left`;
    }
  };

  const clearCompletedToDos = () => {
    setToDos(todos.filter((toDo) => !toDo.completed));
    renderToDos();
  };

  const renderToDos = () => {
    return filteredToDos.map((todo) => (
      <ToDo
        clicked={clicked}
        setClicked={setClicked}
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
      {isMobile ? (
        <div>
          <ToDoList>
            {renderToDos()}

            <ToDoItem>
              <ItemsLeft>{toDosLeft()}</ItemsLeft>
              <button onClick={clearCompletedToDos}>Clear Completed</button>
            </ToDoItem>
          </ToDoList>
          <SelectToDos setCurrFilter={setCurrFilter} />
        </div>
      ) : (
        <div>
          <ToDoList>{renderToDos()}</ToDoList>
          <ToDosActionBar
            toDosLeft={toDosLeft}
            clearCompletedToDos={clearCompletedToDos}
            setCurrFilter={setCurrFilter}
          />
        </div>
      )}
    </ToDoWrapper>
  );
};

export default ToDos;
