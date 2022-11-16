import * as S from "./styles";

interface ModulsCardProps {
  id?: number
  title: string
  description: string
  tag: string
  image?: string
}

export function ModulsCard({ title, description, tag, image } : ModulsCardProps) {
  return (
    <S.WrapperCard>
      <S.Header>
        <h5>{title}</h5>
        <p>{description}</p>
      </S.Header>
      <S.Body>
        <S.Tag>{tag}</S.Tag>
        {image && <S.Figure>
          <img src={image} alt="" />
        </S.Figure>
        }
      </S.Body>
    </S.WrapperCard>
  );
}