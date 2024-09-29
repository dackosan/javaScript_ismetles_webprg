window.onload = function(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            document.getElementById("solution").innerHTML += "fizzbuzz, ";
        }
        else if(i % 3 == 0){
            document.getElementById("solution").innerHTML += "fizz, ";
        }
        else if(i % 5 == 0){
            document.getElementById("solution").innerHTML += "buzz, ";
        }
        else{
            document.getElementById("solution").innerHTML += i + ", ";
        }
    }
}