import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

`

export const ButtonPrev = styled.button`
  height: 6rem;
  width: 6rem;
  font-size: 0;
  border-radius: 0.8rem;
  border: 1px solid var(--purple-50);
  background-color: transparent;

  &:disabled {
    background-color:  var(--purple-10);
    border-color: transparent;
  }
`
export const ButtonNext = styled.button`
  height: 6rem;
  width: 6rem;
  font-size: 0;
  border-radius: 0.8rem;
  border: 1px solid var(--purple-50);
  background-color: transparent;

  &:disabled {
    background-color:  var(--purple-10);
    border-color: transparent;
  }
`