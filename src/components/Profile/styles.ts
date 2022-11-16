import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`

export const ProfileImage = styled.figure`
  border-radius: 50%;
  overflow: hidden;
  width: 7rem;
  height: 7rem;
  flex: none;

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
export const ProfileInfo = styled.div``

export const ProfileName = styled.h6`
  font-size: 2rem;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 1.6rem;
  }
`

export const ProfileJob = styled.p`
  margin-top: 0.5rem;
  color: var(--purple-50);
  font-weight: 600;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 1.4rem;
  }
`
