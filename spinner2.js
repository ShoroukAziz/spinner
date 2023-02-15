
const spin = (chars, interval, initialTimer ) =>{
  
  timer = initialTimer || 0;
  for (const char of chars){
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += interval;
  }
  
}

spin(['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\n'],200,100);