import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`

export const Content = styled.div`
  padding-block: 6rem;
  text-align: center;

  p{
    display: inline-block;
    margin-top: 3rem;
    max-width: 80rem;
    margin-inline: auto;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 1.4rem;
    }
  }
`
export const ButtonsContent = styled.div`
  margin-top: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-wrap: wrap;
  }
`
