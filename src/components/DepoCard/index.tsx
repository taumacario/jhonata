import { Profile } from "../Profile";
import * as S from "./styles";

interface DepoCardProps {
  id?: number
  icon: string
  deposition: string
  imageProfile: string
  name: string
  job: string
}

export function DepoCard({ icon, deposition, name, job, imageProfile } : DepoCardProps) {
  return (
    <S.WrapperCard>
      <S.Header>
        <S.Figure src={icon} alt="aspas" />

        <S.Depo>
        {deposition}
        </S.Depo>     
      </S.Header>

      <Profile name={name} job={job} imageProfile={imageProfile}/>
    </S.WrapperCard>
  );
}