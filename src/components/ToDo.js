const ToDo = ({ text, todo, todos, setToDos }) => {
  const handleToDoDeletion = () => {
    setToDos(todos.filter((elem) => elem.id !== todo.id));
    // console.log(todo);
  };

  const handleToDoCompletion = () => {
    setToDos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <li className="relative mt-1 flex h-[3.1rem] w-full flex-row items-center justify-center rounded-2xl bg-neutral-vl-light-gray ">
        <button
          onClick={handleToDoCompletion}
          className="absolute left-[8%] top-[24%] aspect-square h-6 rounded-full border-[1px] border-solid border-gray-300 "
        ></button>
        <p
          className={` text-neutral-very-dark-grayish-blue ${
            todo.completed ? 'line-through' : ''
          }`}
        >
          {text}
        </p>
        <button
          onClick={handleToDoDeletion}
          className="absolute right-[10%] top-[24%] h-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path
              fill="#494C6B"
              fill-rule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </button>
      </li>
    </div>
  );
};

export default ToDo;
