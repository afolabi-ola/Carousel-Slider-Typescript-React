import styled from 'styled-components';
import Button from './Button';

interface SlideProps {
  name: string;
  src: string;
  desc: string;
}

function Slide({
  imageObj,
  handlePrev,
  handleNext,
}: {
  imageObj: SlideProps;
  handlePrev: () => void;
  handleNext: () => void;
    }) {
    
    
  return (
    <SlideStyle $img={imageObj?.src}>
      <Button onClick={handlePrev}>&larr;</Button>

      <div>
        <h1>{imageObj?.name}</h1>
        <p>{imageObj?.desc}</p>
      </div>
      <Button onClick={handleNext}>&rarr;</Button>
    </SlideStyle>
  );
}

export default Slide;

const SlideStyle = styled.div<{ $img: string }>`
  background-image: url(${({ $img }) => $img});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: 20px;
  transition: 0.5s ease-in-out;
  position: relative;
  z-index: 2;

  div {
    width: 70%;
    text-align: center;
    color: deepskyblue;
    padding: 10px;
    background-color: #000000bc;
    border-radius: 20px;
    transition: 0.5s ease-in-out;

    h1 {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      transition: 0.5s ease-in-out;
    }
  }
`;
