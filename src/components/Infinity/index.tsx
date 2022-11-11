import { Container } from "../Container";
import { Content, Figure, Wrapper } from "./styles";
import infinityImg from '../../assets/infinity.png'
import { TitleSection } from "../TitleSections";

export function Infinity() {
  return (
    <Wrapper id="section4">
      <Container>
        <Content>
          <TitleSection title='DevOps'/>
          <Figure>
            <img src={infinityImg} alt="" />
          </Figure>
        </Content>
      </Container>
    </Wrapper>
  );
}