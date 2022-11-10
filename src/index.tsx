import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import {App} from './App';
import presentImg from './assets/presentationicon.svg'
import dogImg from './assets/dog.jpg'
import quotesImg from './assets/quotes.svg'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/menudata', () => {
      return [
        {
          id:1,
          name: 'Home',
          url: 'https://pt-br.facebook.com/'
        },
        {
          id:2,
          name: 'Sobre mim',
          url: 'https://pt-br.facebook.com/'
        },
        {
          id:3,
          name: 'Portifolio',
          url: 'https://pt-br.facebook.com/'
        },
        {
          id:4,
          name: 'Skils',
          url: 'https://pt-br.facebook.com/'
        },
        {
          id:5,
          name: 'Carreira',
          url: 'https://pt-br.facebook.com/'
        },
        {
          id:6,
          name: 'Contato',
          url: 'https://pt-br.facebook.com/'
        }
      ]
    })

    this.get('/herodata', () => {
      return (
        {
          description: 'Especialize-se através de um método eficiente, uma grade curricular alinhada com o mercado e as atitudes que vão te destacar como profissional.',
        }
      )
    })

    this.get('/presentationdata', () => {
      return [
        {
         id:1,
         icon: presentImg,
         name: 'Desafios práticos com aplicações reais',
         url: 'https://pt-br.facebook.com/'
        },
        {
          id:2,
          icon: presentImg,
          name: 'Comunidade exclusiva de alunos e alunas',
          url: 'https://pt-br.facebook.com/'
        },
        {
          id:3,
          icon: presentImg,
          name: 'Plataforma completa que une todo ecossistema',
          url: 'https://pt-br.facebook.com/'
        },
        {
          id:4,
          icon: presentImg,
          name: 'Fórum exclusivo para dúvidas técnicas',
          url: 'https://pt-br.facebook.com/'
        }
      ]
    })

    this.get('/modulscarddata', () => {
      return [
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
    })

    this.get('/tecscarddata', () => {
      return [
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
    })

    this.get('/depocarddata', () => {
      return [
        {
          id:1,
          icon: quotesImg,
          deposition: '1 O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!',
          name: 'Tauana Macário',
          job: 'Procurando - Socorro Deus',
          imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
        },
        {
          id:2,
          icon: quotesImg,
          deposition: '2 Esse é sua melhor qualidade. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito.',
          name: 'Tauana Macário',
          job: 'Procurando',
          imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
        },
        {
          id:3,
          icon: quotesImg,
          deposition: '3 O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!',
          name: 'Tauana Macário',
          job: 'Procurando - Socorro Deus',
          imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
        },
        {
          id:4,
          icon: quotesImg,
          deposition: '4 Esse é sua melhor qualidade. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito.',
          name: 'Tauana Macário',
          job: 'Procurando',
          imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
        },
        {
          id:5,
          icon: quotesImg,
          deposition: '5 O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!',
          name: 'Tauana Macário',
          job: 'Procurando - Socorro Deus',
          imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
        },
        {
          id:6,
          icon: quotesImg,
          deposition: '6 Esse é sua melhor qualidade. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito.',
          name: 'Tauana Macário',
          job: 'Procurando',
          imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
        },
        {
          id:7,
          icon: quotesImg,
          deposition: '7 O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!',
          name: 'Tauana Macário',
          job: 'Procurando - Socorro Deus',
          imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
        }
      ]
    })
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
