import styled from 'styled-components';
import useMyEffect from './hooks/useMyFetch';
import NavBar from './NavBar';
import Carousel from './components/Carousel';
import Slider from './components/Slider';

interface imagesType {
  myImages: {
    name: string;
    src: string;
    desc: string;
  }[];
}
function App() {
  const { myImages }: imagesType = useMyEffect();

  return (
    <AppStyles>
      <NavBar />
      <h1>Welcome to my Slider</h1>
      <Slider myImagesArr={myImages} />
      <h1>Welcome to my Carousel</h1>
      <Carousel myImagesArr={myImages} />
    </AppStyles>
  );
}

export default App;
const AppStyles = styled.div`
  width: 100%;
  height: 100vh;
  h1{
    padding: 1rem;
    margin-top: 2rem;
  }
`;

//access key =O1yrTPRf1RomvtDDoA8y7RLriEbMrxZmfVlL0eSKybM
// secret key =fPbbChxm9NbZpT3KKemjTmnOLgSqMYIwGlZGBtw7QQY
