import styled from 'styled-components';
import mobileBgLight from './img/bg-mobile-light.jpg';
import desktopBgLight from './img/bg-desktop-light.jpg';
import mobileBgDark from './img/bg-mobile-dark.jpg';
import desktopBgDark from './img/bg-desktop-dark.jpg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  min-height: 100vh;
  height: auto;
  width: 100%;
  max-width: 100vw;
  background-color: ${(props) => props.theme.bgColor};
  font-family: 'Josefin Sans', sans-serif;
  overflow-x: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 13rem;
  width: 100%;
  background-image: ${(props) =>
    `url(${props.theme.mode === 'light' ? mobileBgLight : mobileBgDark})`};
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-image: ${(props) =>
      `url(${props.theme.mode === 'light' ? desktopBgLight : desktopBgDark})`};
  }
`;

export const Intro = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  width: 75%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const AddToDoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 63%;
  }
`;

export const ToDoListWrap = styled.div`
  margin-top: -1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: max-content;
  width: 100%;
`;

export const Parag = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: white;
  font-weight: 700;
  font-size: 20px;
`;
