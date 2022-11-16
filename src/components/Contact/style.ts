import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding-block: 6rem;
`
export const Content = styled.div`
  margin-block: 9rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 5rem;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
export const  EmailContact = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: var(--purple);

    span {
      color: var(--white-50);
    }
  }
`
