import React from 'react';

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
    <div className="w-full text-center">
      <form className="relative" onSubmit={handleToDoSubmit}>
        <button className="absolute left-[14%] top-[23%] aspect-square h-6 rounded-full border-[1px] border-solid border-gray-300 "></button>

        <input
          className="h-12 w-[83%] rounded-2xl text-center"
          type="text"
          placeholder="Write your next to do..."
          value={inputText}
          onChange={handleInputText}
        />
      </form>
    </div>
  );
};

export default AddToDo;
