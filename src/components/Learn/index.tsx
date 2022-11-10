import { Button } from "../Button";
import { Container } from "../Container";
import { ButtonsContent, Content, Wrapper } from "./styles";

export function Learn() {
  return(
    <Wrapper>
      <Container>
        <Content>
          <h3>O que você vai aprender</h3>
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