import React from 'react';
import { Wrapper, Form, CheckBox, Input } from './AddToDo.styles';

const AddToDo = ({ inputText, setInputText, todos, setToDos }) => {
  const handleInputText = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleToDoSubmit = (e) => {
    e.preventDefault();
    setToDos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleToDoSubmit}>
        <CheckBox></CheckBox>

        <Input
          type="text"
          placeholder="Write your next to do..."
          value={inputText}
          onChange={handleInputText}
        />
      </Form>
    </Wrapper>
  );
};

export default AddToDo;
