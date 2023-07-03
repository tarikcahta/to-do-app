import styled, { css } from 'styled-components';
import { useState } from 'react';
import { ReactComponent as CheckmarkSVG } from '../../img/icon-check.svg';

export const ToDoItem = styled.li`
  position: relative;
  display: flex;
  height: 3.1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px rgba(209, 213, 219, 0.25) solid;
  background-color: ${(props) => props.theme.toDoBgColor};
`;

const Button = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 6.5%;
  top: 24%;
  border: 1px solid lightgray;
  border-radius: 50%;
  background-color: transparent;
  ${({ clicked }) =>
    clicked &&
    `background-image: linear-gradient(
     to right,
     hsl(192, 100%, 67%),
     hsl(280, 87%, 65%)
   );`}

  &:hover {
    border: 1px solid hsl(192, 100%, 67%);
  }

  @media (min-width: 768px) {
    left: 2.3%;
  }
`;

const Checkmark = styled(CheckmarkSVG)`
  display: ${({ clicked }) => (clicked ? 'block' : 'none')};
  fill: white;
  margin-left: 0.36rem;
`;

export const ToDoButton = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      onClick();
    } else if (clicked) {
      setClicked(false);
      onClick();
    }
  };

  return (
    <Button clicked={clicked} onClick={handleClick}>
      <Checkmark clicked={clicked} />
    </Button>
  );
};

export const ToDoText = styled.p`
  margin-left: 19%;
  margin-right: 15%;
  flex: 1;
  font-size: 0.8rem;
  color: ${(props) => props.theme.toDoColor};
  ${({ completed }) =>
    completed &&
    css`
      text-decoration: line-through;
      color: ${(props) => props.theme.filterToDosColor};
      font-weight: 400;
    `}

  @media (min-width: 768px) {
    margin-left: 7%;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 7%;
  top: 24%;
  width: 1.5rem;
  height: 1.5rem;
`;
