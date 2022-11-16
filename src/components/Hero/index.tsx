import { Container } from "../Container";
import { Button } from "../Button";
import { Content, Wrapper, Image, InnerText } from "./styles"
import heroImg from '../../assets/hero.png'

interface Hero {
  description: string;
}

export function Hero () {

  return (
    <Wrapper id="home">
      <Container>
        <Content>
          <InnerText>
            <h1>Jônatan IN</h1>
            <p>Especialize-se através de um método eficiente, uma grade curricular alinhada com o mercado e as atitudes que vão te destacar como profissional.</p>
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