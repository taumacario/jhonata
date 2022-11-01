import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  top:2rem;
  left: 0;
  width: 100%;
`

export const Content = styled.div`
  background-color: rgb(15 17 32 / 90%);
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.6rem;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.7rem;

  li:first-child {
    a {
      color: var(--purple-50);
      font-weight: 600;
    }
  }
`

