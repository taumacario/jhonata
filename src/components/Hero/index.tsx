import { Content, Wrapper, Image, InnerText } from "./styles"
import heroImg from '../../assets/hero.png'
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Button } from "../Button";
import { Container } from "../Container";

interface Hero {
  description: string;
}

export function Hero () {
  const [hero, setHero] = useState<Hero>()

  useEffect(() => {
    api.get('herodata')
      .then(response => setHero(response.data))
  }, [])

  return (
    <Wrapper>
      <Container>
        <Content>
          <InnerText>
            <h1>Jônatan IN</h1>
            <p>{hero?.description}</p>
            <Button a link="https://pt-br.facebook.com/" title={'Saiba mais'} />
          </InnerText>

          <Image>
            <img src={heroImg} alt="Imagem logomarca" />
          </Image>
        </Content>
      </Container>
    </Wrapper>
  )
}