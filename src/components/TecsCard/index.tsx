import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container } from "../Container";
import { Card } from "../Card";
import { ModulsCard } from "../ModulsCard";
import { Content, Wrapper } from "./styles";


interface TecsCard {
  id: number
  title: string
  description: string
  tag: string
}

export function TecsCard() {
  const [tecsCard, setTecsCard] = useState<TecsCard[]>([])

  useEffect(() => {
    api.get('tecscarddata')
      .then(response => setTecsCard(response.data))
  }, [])
  return ( 
    <Wrapper>
      <Container>
        <Content>
          {tecsCard.map(item => {
            return ( 
              <Card key={item.id}>
                <ModulsCard
                  title={item.title} 
                  description={item.description}
                  tag={item.tag}
                />
              </Card>
            )
          })}
        </Content>
      </Container>
    </Wrapper>
  );
}