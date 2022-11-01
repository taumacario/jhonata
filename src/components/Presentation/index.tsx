import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "../Container";
import { PlayerVideo } from "../Player";
import { PresentationList, Wrapper, Content, InnerText } from "./styled";

interface Presentation {
  id: number;
  icon: string;
  name: string;
  url: string;
}

export function Presentation () {
  const [presentation, setPresentation] = useState<Presentation[]>([])

  useEffect(() => {
    api.get('presentationdata')
      .then(response => setPresentation(response.data))
  }, [])
  return (
    <Wrapper>
      <Container>
        <Content>
          <PlayerVideo />

          <InnerText>
            <h3>
              Assista ao vídeo e descubra como o Jônatan IN vai transformar sua carreira como DevOps
            </h3>
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