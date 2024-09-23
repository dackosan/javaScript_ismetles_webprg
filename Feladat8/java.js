function Print(){
    let number = document.getElementById("inputNumber").value;
    let result = 1;

    for(let i = 1; i <= number; i++){
        result *= i;
    }

    document.getElementById("solution").innerHTML = "Result : " + result;
}