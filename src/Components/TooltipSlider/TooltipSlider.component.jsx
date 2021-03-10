import React from 'react';
import Carousel from 'react-elastic-carousel';
import TooltipVideo from '../TooltipVideo/TooltipVideo';
import './TooltipSlider.component.styles.css';

const TooltipSlider = () => {
  return (
    <Carousel showArrows={false} >
      <TooltipVideo embedId="Wjrrgrvq1ew" />
      <TooltipVideo embedId="rGHrKkieqCY" />
      <TooltipVideo embedId="Wjrrgrvq1ew" />
      <TooltipVideo embedId="iDVItAX-meU" />
      <TooltipVideo embedId="V49ENdZlOx4" />
    </Carousel>
  )
}

export default TooltipSlider
