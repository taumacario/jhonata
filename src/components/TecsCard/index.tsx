import { useEffect, useState } from "react";

import { Card } from "../Card";
import { ModulsCard } from "../ModulsCard";
import { Content } from "./styles";


interface TecsCard {
  id: number
  title: string
  description: string
  tag: string
}

const DATA = [
  {
    id:1,
    title: 'Deploy',
    description: 'O sucesso de uma entrega é caracterizado pela alta velocidade associada a qualidade da entrega contínua.',
    tag: 'Gitlab CI, Jenkins e Github Actions',
  },
  {
    id:2,
    title: 'Build',
    description: 'Automatizar a compilação do software escolhendo a melhor que se aplica ao projeto, facilita a entrega dos artefatos pela pipeline.',
    tag: 'Composer, Maven, Docker e NPM',
  },
  {
    id:3,
    title: 'Release',
    description: 'Usar ferramentas para definir métricas e garantir entregas bem sucedidas, seja ela por automações, testes e possibilitando um desenvolvimento mutável.',
    tag: 'Elastic Stack, Graylog e Splunk',
  },
  {
    id:4,
    title: 'Test',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tag: 'Snyk, TestComplete e JMeter',
  },
  {
    id:5,
    title: 'Plan',
    description: 'Uso de frameworks de aplicabilidade de metodologias ágeis para encurtar a comunicação e estabelecer um planejamento de fluxo claro de desenvolvimento de software.',
    tag: 'Kanban, Scrum, Jira, Trello, Azure DevOps e Slack',
  },
  {
    id:6,
    title: 'Monitor',
    description: 'Trabalho de acompanhamento de todos os processos e etapas de DevOps para sempre ter visão do que está funcionando e o que precisa melhorar.',
    tag: 'Jaeger, Newrelic, Prometheus, Grafana',
  },
  {
    id:7,
    title: 'Code',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tag: 'Gitlab, GitHub e BitBucket',
  }
]

export function TecsCard() {
  const [tecsCard, setTecsCard] = useState<TecsCard[]>([])

  useEffect(() => {
    setTecsCard(DATA)
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