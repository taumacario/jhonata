import styled from "styled-components";

export const Button = styled.button` 
  background-color: transparent;
  border: 1px solid #422c7b;
  border-radius: 1.2rem;
  padding: 1.2rem 4rem;
  
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;

  transition: background 0.3s;
  

  &:hover {
    background-color: var(--purple-10);
    border-color: transparent;
  }
`