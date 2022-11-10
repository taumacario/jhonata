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

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
export const ProfileInfo = styled.div``

export const ProfileName = styled.h5``

export const ProfileJob = styled.p`
  margin-top: 0.5rem;
  color: var(--purple-50);
  font-weight: 600;
`
