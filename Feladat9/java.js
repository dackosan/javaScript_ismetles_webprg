function Calculate(){
    let number = document.getElementById("inputNumber").value;
    let sum = 0;
    let count = 0;

    number.forEach((element) => {
        sum += element;
        count++;
    });

    let average = sum / count;
    console.log(average);
}