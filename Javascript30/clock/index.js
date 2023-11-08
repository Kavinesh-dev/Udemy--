function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 90) * 360) + 90;


}

setInterval(setDate, 1000);