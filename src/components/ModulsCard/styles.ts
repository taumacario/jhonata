import styled from "styled-components";

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  height: 100%;
  justify-content: space-between;
`

export const Header = styled.div`
  h5 {
    font-size: 2.2rem;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 1.8rem;
    }
  }

  p {
    margin-top: 1rem;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 1.4rem;
    }
  }
`
export const Body = styled.div`
  width: 100%;
`
export const Tag = styled.span`
  display: inline-block;
  color: var(--purple);
  font-weight: 600;
  background: var(--purple-10);
  border-radius: 0.8rem;
  padding: 1rem 2rem;

  @media (min-width: 320px) and (max-width: 767px) {
      font-size: 1.4rem;
    }
`

export const Figure = styled.figure`
  border-radius: 0.8rem;
  overflow: hidden;
  height: 18.5rem;
  margin-top: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
`
