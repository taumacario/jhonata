import { Container } from "../Container";
import { Content, Figure, Wrapper } from "./styles";
import infinityImg from '../../assets/infinity.png'

export function Infinity() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <h3>DevOps</h3>
          <Figure>
            <img src={infinityImg} alt="" />
          </Figure>
        </Content>
      </Container>
    </Wrapper>
  );
}