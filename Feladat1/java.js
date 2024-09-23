window.onload = function(){
    const side1 = 10.4;
    const side2 = 13.5;
    const side3 = 8.2;

    let volume = side1 * side2 * side3;
    document.getElementById("solutionVolume").innerHTML = "Volume : " + volume;

    let surface = (side1 * side2 * 2) + (side1 * side3 * 2) + (side3 * side2 * 2);
    document.getElementById("solutionSurface").innerHTML = "Surface : " + surface;
}