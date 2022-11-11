import { Button } from "../Button";
import { Container } from "../Container";
import { TitleSection } from "../TitleSections";
import { Wrapper, Content, EmailContact } from "./style";

import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { Send }from '@styled-icons/bootstrap/Send'
import { BackToTop } from "../BackToTop";


export function Contact() {
  return (
    <Wrapper id="contact">
      <Container>
        <TitleSection  title='Vamos conversar!'/>

        <Content>
          <Button a={true} link={'https://web.whatsapp.com/'} icon= {<Whatsapp size={25} />} title='Vamos conversar' color="purple"/>
          <EmailContact>
            <a href='mailto:jonatanin@gmail.com'>
              <Send size={25} color={'#4b2e8a'}/>
              Email:
              <span>jonatanin@gmail.com</span>
            </a>
          </EmailContact>
        </Content>

        <BackToTop />

      </Container>

    </Wrapper>
  );
}