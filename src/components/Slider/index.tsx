import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { A11y, Navigation,  } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Header, Wrapper } from './style';

import { Card } from "../Card";
import { DepoCard } from "../DepoCard";
import { TitleSection } from '../TitleSections';



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


export function Slider( { depositions, settings }: SliderProps) {

  return (
    <Wrapper>  
      <Swiper modules={[Navigation, A11y]} {...settings} >
        <Header> 
          <TitleSection alignCenter={false} title='Depoimentos' />
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