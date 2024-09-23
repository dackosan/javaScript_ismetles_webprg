window.onload = function(){
    const currentSeconds = 42;
    const currentMinutes = 34;
    const currentHours = 14;
    const secondInADay = 86400;

    let currentSecondsSum = currentSeconds + (currentMinutes*60) + (currentHours*3600);

    let remainingSeconds = secondInADay - currentSecondsSum;
    document.getElementById("solution").innerHTML = "Remaining seconds from a day : " + remainingSeconds;
}