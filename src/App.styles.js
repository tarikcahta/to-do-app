import styled from 'styled-components';
import mobileBg from './img/bg-mobile-light.jpg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: hsl(236 33% 92%);
  font-family: 'Josefin Sans', sans-serif;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 13rem;
  background-image: url(${mobileBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Intro = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

export const AddToDoWrap = styled.div`
  margin-top: 1.25rem;
  width: 100%;
`;

export const ToDoListWrap = styled.div`
  margin-top: -1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: max-content;
`;
