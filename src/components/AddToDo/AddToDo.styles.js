import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 96%;
  text-align: center;
`;

export const Form = styled.form`
  position: relative;
`;

export const CheckBox = styled.button`
  position: absolute;
  left: 14%;
  top: 23%;
  aspect-ratio: 1 / 1;
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid rgb(209 213 219);
  border-radius: 50%;
`;

export const Input = styled.input`
height: 3rem;
width: 83%;
border-radius: 1rem;
text-align: center;
font-size: 0.9rem;
`;