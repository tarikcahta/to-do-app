import { ToDoItem, ToDoButton, ToDoText, DeleteButton } from './ToDo.styles';

const ToDo = ({
  text,
  todo,
  todos,
  setToDos,
  filteredToDos,
  clicked,
  setClicked,
}) => {
  const handleToDoDeletion = () => {
    setToDos(filteredToDos.filter((elem) => elem.id !== todo.id));
    console.log(todo);
  };

  const handleToDoCompletion = () => {
    setToDos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
            clicked: !item.clicked,
          };
        }
        return item;
      })
    );
  };

  return (
    <ToDoItem>
      <ToDoButton
        clicked={todo.clicked}
        setClicked={setClicked}
        completed={todo.id}
        onClick={handleToDoCompletion}
      />
      <ToDoText completed={todo.completed}>{text}</ToDoText>
      <DeleteButton onClick={handleToDoDeletion}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </DeleteButton>
    </ToDoItem>
  );
};

export default ToDo;
