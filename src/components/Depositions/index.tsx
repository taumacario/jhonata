import { Container } from "../Container";
import { Wrapper } from "./styles";

import { SwiperProps } from "swiper/react";
import { Slider } from "../Slider";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TitleSection } from "../TitleSections";

interface DepoCard {
  id: number
  icon: string
  deposition: string
  name: string
  job: string
  imageProfile: string
}

export function Depositions() {
  const [depoCard, setDepoCard] = useState<DepoCard[]>([])

  
  useEffect(() => {
    api.get('depocarddata')
    .then(response => setDepoCard(response.data))
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