function Print(){
    let inputString = document.getElementById("input").value;
    let stringLength = inputString.length;

    for(let i = 0; i < stringLength;){
        document.getElementById("solution").innerHTML += inputString[i] + "<br>";
        i++;
    }
}