import styled from "styled-components";

interface ButtonProps {
  color: string
}

export const Button = styled.button<ButtonProps>` 
  background-color: transparent;
  border: 1px solid #422c7b;
  border-radius: 1.2rem;
  padding: 1.2rem 3rem;
  
  color: ${props => props.color == 'white' ? "#fff" : "#4b2e8a"};
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: fit-content;

  transition: background 0.3s;
  

  &:hover {
    background-color: var(--purple-10);
    border-color: transparent;
  }
`