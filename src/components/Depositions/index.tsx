import { Container } from "../Container";
import { Wrapper } from "./styles";

import { SwiperProps } from "swiper/react";
import { Slider } from "../Slider";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ButtonNext, ButtonPrev } from "../SwiperButtons/styles";

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
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true
  }

  return (
    <Wrapper>
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