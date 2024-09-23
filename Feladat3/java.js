window.onload = function(){
    const weight = 81.2;
    const height = 1.78;

    let bmi = weight / (height*height);
    document.getElementById("solution").innerHTML = "BMI : " + bmi.toFixed(2);
}