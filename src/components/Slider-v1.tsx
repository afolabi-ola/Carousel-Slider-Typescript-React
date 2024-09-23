import styled from 'styled-components';
import Slide from './Slide';
import { useEffect, useState } from 'react';
import Dots from './Dots';

interface SliderProps {
  myImagesArr: { name: string; src: string; desc: string }[];
}

function Slider({ myImagesArr }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? myImagesArr.length - 1 : currentSlide - 1,
    );
  };
  const handleNext = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === myImagesArr.length - 1 ? 0 : currentSlide + 1,
    );
  };

  const handleDotClick = (i: number) => {
    setCurrentSlide(i);
  };

  useEffect(
    function () {
      const mySlidesInterval = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide === myImagesArr.length - 1 ? 0 : currentSlide + 1,
        );
      }, 4000);
      return () => clearInterval(mySlidesInterval);
    },
    [myImagesArr.length],
  );

  return (
    <SliderStyles $curs={currentSlide} $totalSlides={myImagesArr.length}>
      {myImagesArr.map((_, i) => (
        <Slide
          imageObj={myImagesArr[currentSlide]}
          key={i}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      ))}
      <TextBtnDotStyles>
        {myImagesArr.map((slide, i) => (
          <Dots
            slide={slide}
            index={i === currentSlide}
            onDotClick={() => handleDotClick(i)}
            key={i}
          />
        ))}
      </TextBtnDotStyles>
    </SliderStyles>
  );
}

export default Slider;

const SliderStyles = styled.div<{ $curs: number; $totalSlides: number }>`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-wrap: 0;
  position: relative;
  overflow: hidden;
`;
const TextBtnDotStyles = styled.div`
  width: 100%;
  z-index: 4;
  position: absolute;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
