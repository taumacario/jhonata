import { useSwiper } from "swiper/react";
import { Navigation, ButtonPrev, ButtonNext } from "./styles";

import arrowNextImg from '../../assets/arrowNext.svg'
import arrowPrevImg from '../../assets/arrowPrev.svg'

// interface ButtonProps {
//   activePrev: boolean
//   activeNext: boolean
// }
// disabled={activePrev}
// disabled={activeNext}
// {activePrev, activeNext } : ButtonProps

export const SwiperButtons = ( ) => {
  const swiper = useSwiper();

  return (
    <Navigation>
      <ButtonPrev  onClick={() => swiper.slidePrev()}>
        <img src={arrowPrevImg} alt="" /> 
      </ButtonPrev>

      <ButtonNext  onClick={() => swiper.slideNext()}>
        <img src={arrowNextImg} alt="" />
      </ButtonNext>
    </Navigation>
  ) 
};