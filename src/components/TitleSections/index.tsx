import { Title } from "./styles";

interface TitleSectionProps {
  alignCenter?: boolean
  title: string
}

export function TitleSection({alignCenter=true, title}: TitleSectionProps) {
  return ( 
    <Title alignCenter={alignCenter}>
      {title}
    </Title>
  );
}