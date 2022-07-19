export const formatTime = (time) => {
  const minutes = time%(60*60);
  const getSeconds = Math.ceil(minutes % 60) ;
  const getMinutes = Math.floor(minutes/60);
  const getHours = Math.floor(time / (60*60));


  return `${getHours} : ${getMinutes<=9? `0${getMinutes}`: `${getMinutes}`} : ${getSeconds<=9?`0${getSeconds}`:`${getSeconds}`}`;
};
