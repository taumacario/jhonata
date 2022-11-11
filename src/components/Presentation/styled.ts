import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  padding-block: 6rem;

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: unset;
    padding-block: 3rem;
  }
`

export const InnerText = styled.div`
  h4 {
    font-size: 2.2rem;

    @media (min-width: 768px) and (max-width: 1024px) {
      text-align: center;
    }
  }
`

export const PresentationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 4rem;

  @media (min-width: 768px) and (max-width: 1024px) {
      justify-content: center;
    }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

  img {
    width: auto;
    height: 3rem;
  }

  a{
    margin-top: 2rem;
    max-width: 23rem;
    color: var(--white);
    font-weight: 600;
    font-size: 1.4rem;
  }
`