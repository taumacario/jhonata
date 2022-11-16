import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Card } from "../Card";
import { ModulsCard } from "../ModulsCard";
import { Content } from "./styles";


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
  );
}