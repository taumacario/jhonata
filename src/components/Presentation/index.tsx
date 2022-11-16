import { useEffect, useState } from "react";
import { Container } from "../Container";
import { PlayerVideo } from "../Player";
import { PresentationList, Wrapper, Content, InnerText } from "./styled";
import presentImg from '../../assets/presentationicon.svg'

interface Presentation {
  id: number;
  icon: string;
  name: string;
  url: string;
}

const DATA = [
  {
   id:1,
   icon: presentImg,
   name: 'Desafios práticos com aplicações reais',
   url: 'https://pt-br.facebook.com/'
  },
  {
    id:2,
    icon: presentImg,
    name: 'Comunidade exclusiva de alunos e alunas',
    url: 'https://pt-br.facebook.com/'
  },
  {
    id:3,
    icon: presentImg,
    name: 'Plataforma completa que une todo ecossistema',
    url: 'https://pt-br.facebook.com/'
  },
  {
    id:4,
    icon: presentImg,
    name: 'Fórum exclusivo para dúvidas técnicas',
    url: 'https://pt-br.facebook.com/'
  }
]

export function Presentation () {
  const [presentation, setPresentation] = useState<Presentation[]>([])

  useEffect(() => {
    setPresentation(DATA)
  }, [])
  return (
    <Wrapper id="section1">
      <Container>
        <Content>
          <PlayerVideo />

          <InnerText>
            <h4>
              Assista ao vídeo e descubra como o Jônatan IN vai transformar sua carreira como DevOps
            </h4>
            <PresentationList>
              {presentation.map(item => {
                return (
                  <li key={item.id}>
                    <img src={item.icon} alt="" />
                    <a href={item.url}>
                      {item.name}
                    </a>
                  </li>
                )
              })}
            </PresentationList>
          </InnerText>
        </Content>
      </Container>
    </Wrapper>
  );
}