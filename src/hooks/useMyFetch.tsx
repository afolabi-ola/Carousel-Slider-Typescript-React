import { useEffect, useState } from 'react';

function useMyEffect() {
  const [myImages, setMyImages] = useState<
    { name: string; src: string; desc: string }[]
  >([]);

  useEffect(function () {
    async function data() {
      const res = await fetch('http://localhost:3000/images');
      const data = await res.json();
      setMyImages([...data]);
    }
    data();
  }, []);

  return { myImages };
}

export default useMyEffect;
