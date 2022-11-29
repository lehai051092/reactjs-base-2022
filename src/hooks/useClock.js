import {useState, useEffect} from "react";

function handleDate(date) {
  if (!date) return;

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${second}`;
}

function useClock() {
  const [getDateString, setDateString] = useState('');

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const date = new Date();
      const newDateString = handleDate(date);

      setDateString(newDateString);
    }, 1000);

    return () => {
      console.log('clock clean');
      clearInterval(clockInterval);
    };
  }, []);

  return getDateString;
}

export default useClock;