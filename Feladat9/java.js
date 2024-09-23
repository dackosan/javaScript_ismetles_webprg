function Calculate(){
    let number = document.getElementById("inputNumber").value;
    let sum = 0;
    let count = 0;

    for (let i in number.toString()) {
        sum += parseInt(number.toString()[i]);
        count++;
    }

    let average = sum / count;

    document.getElementById("solution").innerHTML = "Average : " + average;
}