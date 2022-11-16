import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  top: 2rem;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: all 0.3s;

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
  transition: all 0.3s;

  &.bg {
    padding-top: 3rem;
    padding-inline: 2.5rem;
  }

  img{
    z-index: 2;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.7rem;
  cursor: pointer;

  a{
    color: var(--white);
  }

  .active {
    color: var(--purple);
    font-weight: 600;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background: #251641;
    right: 0;
    bottom: 0;
    padding: 5rem;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    justify-content: flex-start;
    padding-top: 12rem;
    opacity: 0;
    pointer-events: none;
    transition: all .3s ease-in-out;
    transform: translateY(-100%);

    &.open {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0%);
    }
  }
`

export const MenuHamburguer = styled.div`
  display: none;
  width: 40px;
  height: 35px; 
  position: relative;
  transition: .5s ease-in-out;
  transform: rotate(0deg);
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    display: block;
  }

  span {
    display: block;
    position: absolute;
    height: 0.4rem;
    border-radius: 9px;
    opacity: 1;
    right: 0;
    transition: .5s ease-in-out;
    transform: rotate(0deg);


    &:nth-child(1) {
      top: 0;
      width: 100%;
      background: var(--white);
    }
    &:nth-child(2), &:nth-child(3) {
      top: 1.3rem;
      width: 90%;
      background: var(--purple);
    }
    &:nth-child(4) {
      top: 2.5rem;
      width: 80%;
      background: var(--white);
    }
  }

  &.open {

    span:nth-child(1) {
      top: 1.3rem;
      width: 0%;
      right: 50%;
    }

    span:nth-child(2) {
      transform: rotate(45deg);
    }

    span:nth-child(3) {
      transform: rotate(-45deg);
    }

    span:nth-child(4) {
      top: 1.3rem;
      width: 0%;
      right: 50%;
    }
  }
`

