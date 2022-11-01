import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import {App} from './App';
import presentImg from './assets/presentationicon.svg'

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
