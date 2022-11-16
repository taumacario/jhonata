import * as S from './styles'

interface ProfileProps {
  imageProfile: string
  name: string
  job: string
}

export function Profile({imageProfile, name, job} : ProfileProps) {
  return (
    <S.Profile>
      <S.ProfileImage>
        <img src={imageProfile} alt="" />
      </S.ProfileImage>

      <S.ProfileInfo>
        <S.ProfileName>
          {name}
        </S.ProfileName>
        <S.ProfileJob>
          {job}
        </S.ProfileJob>
      </S.ProfileInfo>
    </S.Profile>
  );
}