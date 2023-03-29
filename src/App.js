import './App.css';
import React, { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';
import SelectToDos from './components/SelectToDos';
// import styled from 'styled-components';

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
    <div className="relative flex min-h-screen w-screen flex-col bg-neutral-vl-grayish-blue font-josefin-sans">
      <div className="flex h-[13rem] flex-col items-center justify-center bg-[url('../images/bg-mobile-light.jpg')] bg-cover bg-no-repeat">
        <AddToDo
          todos={todos}
          setToDos={setToDos}
          inputText={inputText}
          setInputText={setInputText}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <ToDos
          todos={todos}
          setToDos={setToDos}
          filteredToDos={filteredToDos}
        />
      </div>
      <div className="absolute bottom-[4%] w-full">
        <SelectToDos setCurrFilter={setCurrFilter} />
      </div>
    </div>
  );
}

export default App;
