import './App.css';
import React, { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo/AddToDo';
import ToDos from './components/ToDos/ToDos';
import {
  Container,
  Header,
  Intro,
  AddToDoWrap,
  ToDoListWrap,
} from './App.styles';

function App() {
  //state
  const [inputText, setInputText] = useState('');
  const [todos, setToDos] = useState([]);
  const [currFilter, setCurrFilter] = useState('all');
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    handleFilteringToDos();
  }, [todos, currFilter]);

  // funcs

  const handleFilteringToDos = () => {
    switch (currFilter) {
      case 'completed':
        setFilteredToDos(todos.filter((todo) => todo.completed === true));
        break;
      case 'notCompleted':
        setFilteredToDos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  };

  return (
    <Container>
      <Header>
        <Intro>
          <p>TO DO</p>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
              />
            </svg>
          </button>
        </Intro>
        <AddToDoWrap>
          <AddToDo
            todos={todos}
            setToDos={setToDos}
            inputText={inputText}
            setInputText={setInputText}
          />
        </AddToDoWrap>
      </Header>
      <ToDoListWrap>
        <ToDos
          todos={todos}
          setToDos={setToDos}
          filteredToDos={filteredToDos}
          setCurrFilter={setCurrFilter}
        />
      </ToDoListWrap>
    </Container>
  );
}

export default App;
