import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { A11y, Navigation,  } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Header, Title, Wrapper } from './style';

import { Card } from "../Card";
import { DepoCard } from "../DepoCard";
import { SwiperButtons } from '../SwiperButtons';
import { useState } from 'react';



interface SliderProps {
  settings: SwiperProps
  title:  string
  depositions: {
    id: number
    icon: string
    deposition: string
    name: string
    job: string
    imageProfile: string
  }[]
}


export function Slider( { title, depositions, settings }: SliderProps) {
  // const [activePrev, setActivePrev] = useState(false);
  // const [activeNext, setActiveNext] = useState(false);
  // activePrev={activePrev} activeNext={activeNext}

 
  // function x() {
  //   console.log('inicio')
  //   //setActivePrev(true)
  // }
  // function xx() {
  //   console.log('final')
  //   //setActiveNext(true)
  // }

  return (
    <Wrapper>
      <Swiper 
        modules={[Navigation, A11y]}
        //onReachBeginning={}
        //onReachEnd={}
        {...settings} 
      >
        <Header>
          <Title>{title}</Title>
          {/* <SwiperButtons /> */}
        </Header>
        
        {depositions.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <Card>
                <DepoCard icon={item.icon} deposition={item.deposition }name={item.name} job={item.job} imageProfile={item.imageProfile}/>
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Wrapper>
  );
}