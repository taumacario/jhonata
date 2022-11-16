import { Container } from "../Container";
import { Wrapper } from "./styles";

import { SwiperProps } from "swiper/react";
import { Slider } from "../Slider";

import { useEffect, useState } from "react";
import quotesImg from '../../assets/quotes.svg'


interface DepoCard {
  id: number
  icon: string
  deposition: string
  name: string
  job: string
  imageProfile: string
}

const DATA = [
  {
    id:1,
    icon: quotesImg,
    deposition: 'O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!',
    name: 'Tauana Macário',
    job: 'Procurando - Socorro Deus',
    imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
  },
  {
    id:2,
    icon: quotesImg,
    deposition: 'Esse é sua melhor qualidade. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito.',
    name: 'Tauana Macário',
    job: 'Procurando',
    imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
  },
  {
    id:3,
    icon: quotesImg,
    deposition: 'O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!',
    name: 'Tauana Macário',
    job: 'Procurando - Socorro Deus',
    imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
  },
  {
    id:4,
    icon: quotesImg,
    deposition: 'Esse é sua melhor qualidade. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito.',
    name: 'Tauana Macário',
    job: 'Procurando',
    imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
  },
  {
    id:5,
    icon: quotesImg,
    deposition: 'O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!',
    name: 'Tauana Macário',
    job: 'Procurando - Socorro Deus',
    imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
  },
  {
    id:6,
    icon: quotesImg,
    deposition: 'Esse é sua melhor qualidade. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito.',
    name: 'Tauana Macário',
    job: 'Procurando',
    imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
  },
  {
    id:7,
    icon: quotesImg,
    deposition: 'O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!',
    name: 'Tauana Macário',
    job: 'Procurando - Socorro Deus',
    imageProfile: 'https://www.matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
  }
]

export function Depositions() {
  const [depoCard, setDepoCard] = useState<DepoCard[]>([])

  
  useEffect(() => {
   setDepoCard(DATA)
  }, [])
  
  
  const settings: SwiperProps = {
    navigation: true,
    breakpoints:{
      320: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }
  }

  return (
    <Wrapper id="depositions">
      <Container>
        <Slider 
          title='Depoimentos'
          depositions={depoCard} 
          settings={settings} 
        />
      </Container>
    </Wrapper>
  );
}