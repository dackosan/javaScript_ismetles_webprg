window.onload = function(){
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && count == 3) {
            document.getElementById("solution").innerHTML += i + " ";
            console.log(i);
            count = 0;
        }
        else if(i % 3 == 0 && count == 2){
            document.getElementById("solution").innerHTML += i + " ";
            console.log(i);
            count = 0;
        }
        else if(i % 3 == 0 && count == 1){
            document.getElementById("solution").innerHTML += i + " ";
            console.log(i);
            count = 0;
        }
        else if(i % 3 != 0){
            document.getElementById("solution").innerHTML += i + " ";
            console.log(i);
        }
        else{
            count++;
        }
    }
}