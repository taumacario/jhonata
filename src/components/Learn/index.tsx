import { Button } from "../Button";
import { Container } from "../Container";
import { TitleSection } from "../TitleSections";
import { ButtonsContent, Content, Wrapper } from "./styles";

export function Learn() {
  return(
    <Wrapper id="section3">
      <Container>
        <Content>
          <TitleSection title='O que você vai aprender' />
          <p>
            Como assinante do Ignite, você vai ter acesso imediato e 
            ilimitado a todas as trilhas pra escolher a tecnologia mais 
            alinhada com seu objetivo para se especializar
          </p>

          <ButtonsContent>
            <Button a link="https://pt-br.facebook.com/" title={'Iniciante'} />
            <Button a link="https://pt-br.facebook.com/" title={'Intermediário'} />
            <Button a link="https://pt-br.facebook.com/" title={'Avançado'} />
          </ButtonsContent>

        </Content>
      </Container>
    </Wrapper>
  );
}