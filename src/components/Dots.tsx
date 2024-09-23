import styled from 'styled-components';

function Dots({
  slide,
  index,
  onDotClick,
}: {
  slide: { name: string; src: string; desc: string };
  index: boolean;
  onDotClick: () => void;
}) {
  return (
    <DotsStyles
      $img={slide.src}
      $active={index}
      onClick={() => onDotClick()}
    ></DotsStyles>
  );
}

export default Dots;

const DotsStyles = styled.div<{ $img: string; $active: boolean }>`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  border: ${({ $active }) =>
    $active === true ? '3px solid white' : '1px solid white'};
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  background-image: ${({ $active, $img }) =>
    $active ? `url(${$img})` : 'transparent'};
  background-image: ${({ $active, $img }) =>
    $active ? `url(${$img})` : 'transparent'};
  cursor: pointer;
`;
