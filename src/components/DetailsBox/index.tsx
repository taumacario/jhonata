import {  BoxOne, BoxTwo, Content, TextBoxTwo, TextContent, Wrapper } from "./styles";
import { Card } from "../Card";

import { Container } from "../Container";

import codeImg from '../../assets/code.svg'
import designImg from '../../assets/design.svg'
import projectsImg from '../../assets/projects.svg'

export function DetailsBox() {
  return (
    <Wrapper id="section2">
      <Container>
        <Content>

          <BoxOne>
            <Card> 
              <img src={codeImg} alt="" />
              <p>+120 aulas</p>
            </Card>

            <Card active> 
              <img src={projectsImg} alt="" />
              <p>+200 horas</p>
            </Card>

            <Card> 
              <img src={designImg} alt="" />
              <p>+12 projetos</p>
            </Card>
          </BoxOne>

          <BoxTwo>
            <Card active>
              <TextBoxTwo>
                <TextContent>
                  <span>Cultura</span>
                  <p>DevOps</p>
                </TextContent>

                <TextContent>
                  <span>Dezenas de projetos e</span>
                  <p>Experiência</p>
                </TextContent>

                <TextContent>
                  <span>Suporte</span>
                  <p>Técnico</p>
                </TextContent>
              </TextBoxTwo>

            </Card>
          </BoxTwo>

        </Content>
      </Container>
    </Wrapper>
  )
}