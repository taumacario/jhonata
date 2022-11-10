import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  top: 2rem;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: background 0.3s;

  &.bg {
    background-color: var(--header-bg);
    top: 0;
  }
`

export const Content = styled.div`
  background-color: var(--header-bg);
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.6rem;

  &.bg {
    padding-top: 3rem;
    padding-block: 2.5rem;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.7rem;

  li:first-child {
    a {
      color: var(--purple);
      font-weight: 600;
    }
  }
`

