import { useEffect, useState } from 'react';

function useMyEffect() {
  const [myImages, setMyImages] = useState<
    { name: string; src: string; desc: string }[]
  >([]);

  useEffect(function () {
    async function data() {
      const res = await fetch('data/db.json');
      const data = await res.json();
      setMyImages([...data.images]);
    }
    data();
  }, []);

  return { myImages };
}

export default useMyEffect;
