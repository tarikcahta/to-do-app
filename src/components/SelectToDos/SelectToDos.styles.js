import styled from 'styled-components';

export const StyledFilterButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 3.1rem;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.3rem;
  color: ${(props) => props.theme.filterToDosColor};
  background-color: ${(props) => props.theme.toDoBgColor};
  font-size: 0.875rem /* 14px */;
  font-weight: 900;
  line-height: 1.25rem /* 20px */;
`;

export const StyledFilterButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

  &:active,
  &:focus {
    color: hsl(220, 98%, 61%);
  }
`;
