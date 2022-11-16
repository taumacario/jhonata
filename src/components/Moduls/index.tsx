import { useEffect, useState } from "react";
import { ModulsCard } from "../ModulsCard";
import { Card } from "../Card";
import { Content } from "./styles";

import dogImg from '../../assets/dog.jpg'

interface ModulsCard {
  id: number
  title: string
  description: string
  tag: string
  image: string
}

const DATA = [
  {
    id:1,
    title: '1. Primeiros passos',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tag: 'Docker',
    image: dogImg,
  },
  {
    id:2,
    title: '2. Configurando a maquina',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tag: 'Docker',
    image: dogImg,
  },
  {
    id:3,
    title: '3. O que é DevOps',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tag: 'Docker',
    image: dogImg,
  },
  {
    id:4,
    title: '4. Mão na massa',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tag: 'Docker',
    image: dogImg,
  },
  {
    id:5,
    title: '5. Git e GitLab',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tag: 'Docker',
    image: dogImg,
  },{
    id:6,
    title: '6. Deploy',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tag: 'Docker',
    image: dogImg,
  }
]


export function Moduls() {
  const [modulsCard, setModulsCard] = useState<ModulsCard[]>([])

  useEffect(() => {
    setModulsCard(DATA)
  }, [])

  return(
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
  );
}