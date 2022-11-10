import { Container } from "../Container";
import { ModulsCard } from "../ModulsCard";
import { Content, Wrapper } from "./styles";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../Card";

interface ModulsCard {
  id: number
  title: string
  description: string
  tag: string
  image: string
}


export function Moduls() {
  const [modulsCard, setModulsCard] = useState<ModulsCard[]>([])

  useEffect(() => {
      api.get('modulscarddata')
      .then(response => setModulsCard(response.data))
  }, [])

  return(
    <Wrapper>
      <Container>
        <Content>
        {modulsCard.map(item => {
          return ( 
            <Card key={item.id}>
              <ModulsCard
                title={item.title} 
                description={item.description}
                tag={item.tag}
                image={item.image}
              />
            </Card>
          )
        })}
        </Content>
      </Container>
    </Wrapper>
  );
}