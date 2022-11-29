import {useState, useEffect, useRef} from 'react';

function getRandomColor(currentColor) {
  const colorList = ['red', 'green', 'blue', 'yellow', 'orange'];
  const currentIndex = colorList.indexOf(currentColor);
  let newIndex = currentIndex;

  if (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 4);
  }

  return colorList[newIndex];
}

function useMagicBox() {
  const [getColor, setColor] = useState('transparent');
  const colorRef = useRef('transparent');

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = getRandomColor(colorRef.current);

      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  });

  return getColor;
}

export default useMagicBox;

