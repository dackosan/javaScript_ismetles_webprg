function Print(){
    let number = document.getElementById("inputNumber").value;
    let index = 1;
    let result = 1;

    while (index != number){
        result *= index;
        index++;
    }

    document.getElementById("solution").innerHTML = "Result : " + result;
}