function Paint(){
    let number = document.getElementById("inputNumber").value;

    /*oszlop*/
    for(let i = 0; i < number; i++){
        if(i > 1){
            for(let o = 0; o < number; o++){
                if(o == 0 || o == i || o == number){
                    ocument.getElementById("solution").innerHTML += "%";
                }
                else{
                    ocument.getElementById("solution").innerHTML += " ";
                }
            }
        }
        for(let i = 0; i < number; i++){
            document.getElementById("solution").innerHTML += "%";
        }
        document.getElementById("solution").innerHTML += "<br>";
    }
}