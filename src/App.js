import { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo/AddToDo';
import ToDos from './components/ToDos/ToDos';
import {
  Container,
  Header,
  Intro,
  AddToDoWrap,
  ToDoListWrap,
  Parag,
} from './App.styles';
import { ThemeProvider } from 'styled-components';
import { ThemeIcon } from './components/ThemeIcon';

const theme = {
  light: {
    mode: 'light',
    toDoBgColor: 'hsl(0, 0%, 98%)', //to do bg color
    bgColor: 'hsl(236, 33%, 92%)', // background color
    toDoDoneColor: 'hsl(233, 11%, 84%)', //when task is done
    filterToDosColor: 'rgba(147, 148, 165, 0.6)', // for filter tasks
    toDoColor: 'hsl(235, 19%, 35%)', //to do task
    bgImageMob: './img/bg-mobile-light.jpg',
    // bgImageDesk: './img/bg-desktop-light.jpg',
  },
  dark: {
    mode: 'dark',
    bgColor: 'hsl(235, 21%, 11%)',
    toDoBgColor: 'hsl(235, 24%, 19%)',
    toDoColor: 'hsl(234, 39%, 85%)',
    filterToDosColor: 'rgba(147, 148, 165, 0.6)', // for filter tasks
    dtLightGrayishBlueHover: 'hsl(236, 33%, 92%)',
    dtDarkGrayishBlue: 'hsl(234, 11%, 52%)',
    dtVeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
    dtVeryDarkGrayishBlue2: 'hsl(237, 14%, 26%)',
    bgImageMob: './img/bg-mobile-dark.jpg',
    // bgImageDesk: './img/bg-desktop-dark.jpg',
  },
};

function App() {
  //state
  const [inputText, setInputText] = useState('');
  const [todos, setToDos] = useState([
    {
      text: 'Complete to do app',
      completed: false,
      id: 1,
      clicked: false,
    },
  ]);
  const [currFilter, setCurrFilter] = useState('all');
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [currTheme, setCurrTheme] = useState('light');
  const isMobile = window.innerWidth <= 768;

  console.log(theme[currTheme]);
  console.log(theme[currTheme].bgImageMob);
  // console.log(currTheme)

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
        console.log(todos);
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  };

  const handleThemeToggle = () => {
    setCurrTheme(currTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme[currTheme]}>
      <Container isMobile={isMobile}>
        <Header>
          <Intro>
            <Parag>TO DO</Parag>
            <ThemeIcon
              handleThemeToggle={handleThemeToggle}
              currTheme={currTheme}
            />
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
            isMobile={isMobile}
            todos={todos}
            setToDos={setToDos}
            filteredToDos={filteredToDos}
            setCurrFilter={setCurrFilter}
            clicked={clicked}
            setClicked={setClicked}
          />
        </ToDoListWrap>
      </Container>
    </ThemeProvider>
  );
}

export default App;
